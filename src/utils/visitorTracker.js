/**
 * Visitor Tracking Service
 * 
 * Silently tracks portfolio visitors and sends notifications via Discord webhook.
 * Collects publicly available data without requiring user permissions.
 */

// Flag to prevent duplicate tracking in React.StrictMode (development only)
let hasTracked = false;

/**
 * Track a visitor and send notification to Discord
 * This function runs silently and won't throw errors that affect the portfolio
 */
export const trackVisitor = async () => {
  // Prevent duplicate tracking in React.StrictMode (development mode)
  if (hasTracked) {
    console.log('⏭️ Skipping duplicate track call (React.StrictMode)');
    return;
  }
  hasTracked = true;
  
  try {
    // Get Discord webhook URL from environment variables
    const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
    
    // Skip tracking if webhook URL is not configured
    if (!webhookUrl || webhookUrl === 'PASTE_YOUR_WEBHOOK_URL_HERE') {
      console.info('❌ Visitor tracking disabled: No webhook URL configured');
      return;
    }
    
    console.log("📊 Tracking visitor...");


    // Collect visitor information
    const visitorInfo = await collectVisitorInfo();
    
    // Send to Discord
    await sendDiscordNotification(webhookUrl, visitorInfo);
    
  } catch (error) {
    // Silent failure - don't let tracking errors affect the portfolio
    console.error('Visitor tracking error:', error);
  }
};

/**
 * Collect publicly available visitor information
 */
const collectVisitorInfo = async () => {
  const info = {
    timestamp: new Date().toISOString(),
    page: window.location.href,
    referrer: document.referrer || 'Direct visit',
    userAgent: navigator.userAgent,
    language: navigator.language,
    languages: navigator.languages?.join(', ') || navigator.language,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    viewportSize: `${window.innerWidth}x${window.innerHeight}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };

  // Parse user agent for device info
  info.deviceInfo = parseUserAgent(info.userAgent);

  // Collect hardware information
  info.hardware = collectHardwareInfo();

  // Collect network information
  info.network = collectNetworkInfo();

  // Collect browser features
  info.browserFeatures = collectBrowserFeatures();

  // Collect performance metrics
  info.performance = collectPerformanceMetrics();

  // Collect session information
  info.session = collectSessionInfo();

  // Get approximate location from IP (using free ipapi.co API)
  try {
    const locationData = await fetchLocationData();
    info.location = locationData;
  } catch (error) {
    info.location = { error: 'Location data unavailable' };
  }

  return info;
};

/**
 * Collect hardware information
 */
const collectHardwareInfo = () => {
  return {
    cpuCores: navigator.hardwareConcurrency || 'Unknown',
    deviceMemory: navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Unknown',
    colorDepth: `${window.screen.colorDepth}-bit`,
    pixelRatio: window.devicePixelRatio || 1,
    touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    maxTouchPoints: navigator.maxTouchPoints || 0,
    platform: navigator.platform || 'Unknown',
    vendor: navigator.vendor || 'Unknown',
  };
};

/**
 * Collect network information
 */
const collectNetworkInfo = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (connection) {
    return {
      effectiveType: connection.effectiveType || 'Unknown', // 4g, 3g, 2g, slow-2g
      downlink: connection.downlink ? `${connection.downlink} Mbps` : 'Unknown',
      rtt: connection.rtt ? `${connection.rtt} ms` : 'Unknown', // Round-trip time
      saveData: connection.saveData || false, // Data saver mode
      type: connection.type || 'Unknown', // wifi, cellular, ethernet, etc.
    };
  }
  
  return {
    effectiveType: 'Unknown',
    downlink: 'Unknown',
    rtt: 'Unknown',
    saveData: false,
    type: 'Unknown',
  };
};

/**
 * Collect browser features and capabilities
 */
const collectBrowserFeatures = () => {
  return {
    cookiesEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack === '1' || navigator.doNotTrack === 'yes',
    onlineStatus: navigator.onLine,
    javaEnabled: typeof navigator.javaEnabled === 'function' ? navigator.javaEnabled() : false,
    pdfViewerEnabled: navigator.pdfViewerEnabled || false,
    webGLSupport: checkWebGLSupport(),
    localStorageEnabled: checkLocalStorage(),
    sessionStorageEnabled: checkSessionStorage(),
    indexedDBEnabled: checkIndexedDB(),
    serviceWorkerSupport: 'serviceWorker' in navigator,
    notificationSupport: 'Notification' in window,
  };
};

/**
 * Check WebGL support
 */
const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && 
              (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

/**
 * Check localStorage availability
 */
const checkLocalStorage = () => {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Check sessionStorage availability
 */
const checkSessionStorage = () => {
  try {
    const test = '__storage_test__';
    sessionStorage.setItem(test, test);
    sessionStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Check IndexedDB availability
 */
const checkIndexedDB = () => {
  return !!window.indexedDB;
};

/**
 * Collect performance metrics
 */
const collectPerformanceMetrics = () => {
  if (!window.performance || !window.performance.timing) {
    return { available: false };
  }

  const timing = window.performance.timing;
  const navigation = window.performance.navigation;

  return {
    pageLoadTime: timing.loadEventEnd - timing.navigationStart,
    domReadyTime: timing.domContentLoadedEventEnd - timing.navigationStart,
    dnsTime: timing.domainLookupEnd - timing.domainLookupStart,
    tcpTime: timing.connectEnd - timing.connectStart,
    requestTime: timing.responseEnd - timing.requestStart,
    renderTime: timing.domComplete - timing.domLoading,
    navigationType: navigation?.type === 0 ? 'Navigate' : navigation?.type === 1 ? 'Reload' : navigation?.type === 2 ? 'Back/Forward' : 'Unknown',
    redirectCount: navigation?.redirectCount || 0,
  };
};

/**
 * Collect session information
 */
const collectSessionInfo = () => {
  const sessionKey = 'portfolio_visitor_session';
  const returningKey = 'portfolio_returning_visitor';
  
  let sessionData = {
    isNewSession: true,
    isReturningVisitor: false,
    visitCount: 1,
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
  };

  try {
    // Check if returning visitor
    const returningData = localStorage.getItem(returningKey);
    if (returningData) {
      const parsed = JSON.parse(returningData);
      sessionData.isReturningVisitor = true;
      sessionData.visitCount = (parsed.visitCount || 0) + 1;
      sessionData.firstVisit = parsed.firstVisit || new Date().toISOString();
      sessionData.lastVisit = parsed.lastVisit || new Date().toISOString();
      
      // Update visit count and last visit
      localStorage.setItem(returningKey, JSON.stringify({
        visitCount: sessionData.visitCount,
        firstVisit: sessionData.firstVisit,
        lastVisit: new Date().toISOString(),
      }));
    } else {
      // First time visitor
      localStorage.setItem(returningKey, JSON.stringify({
        visitCount: 1,
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
      }));
    }

    // Check session (expires when browser closes)
    const sessionExists = sessionStorage.getItem(sessionKey);
    if (sessionExists) {
      sessionData.isNewSession = false;
    } else {
      sessionStorage.setItem(sessionKey, 'active');
    }
  } catch (e) {
    // Silently fail if storage not available
  }

  return sessionData;
};


/**
 * Parse user agent to extract device and browser info
 */
const parseUserAgent = (userAgent) => {
  const ua = userAgent.toLowerCase();
  
  // Detect device type
  let deviceType = 'Desktop';
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(userAgent)) {
    deviceType = 'Tablet';
  } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
    deviceType = 'Mobile';
  }

  // Detect browser
  let browser = 'Unknown';
  if (ua.includes('firefox')) browser = 'Firefox';
  else if (ua.includes('edg')) browser = 'Edge';
  else if (ua.includes('chrome')) browser = 'Chrome';
  else if (ua.includes('safari')) browser = 'Safari';
  else if (ua.includes('opera')) browser = 'Opera';

  // Detect OS
  let os = 'Unknown';
  if (ua.includes('win')) os = 'Windows';
  else if (ua.includes('mac')) os = 'macOS';
  else if (ua.includes('linux')) os = 'Linux';
  else if (ua.includes('android')) os = 'Android';
  else if (ua.includes('ios') || ua.includes('iphone') || ua.includes('ipad')) os = 'iOS';

  return { deviceType, browser, os };
};

/**
 * Fetch approximate location data from IP address
 * Uses free ipapi.co API (no API key required, 1000 requests/day limit)
 */
const fetchLocationData = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Location API request failed');
    }

    const data = await response.json();
    
    return {
      ip: data.ip || 'Unknown',
      city: data.city || 'Unknown',
      region: data.region || 'Unknown',
      country: data.country_name || 'Unknown',
      countryCode: data.country_code || 'Unknown',
      continent: data.continent_code || 'Unknown',
      postal: data.postal || 'Unknown',
      latitude: data.latitude || null,
      longitude: data.longitude || null,
      timezone: data.timezone || 'Unknown',
      utcOffset: data.utc_offset || 'Unknown',
      countryCallingCode: data.country_calling_code || 'Unknown',
      currency: data.currency || 'Unknown',
      currencyName: data.currency_name || 'Unknown',
      languages: data.languages || 'Unknown',
      asn: data.asn || 'Unknown',
      org: data.org || 'Unknown',
    };
  } catch (error) {
    console.error('Location fetch error:', error);
    return {
      error: 'Unable to fetch location',
    };
  }
};

/**
 * Send formatted notification to Discord webhook
 */
const sendDiscordNotification = async (webhookUrl, visitorInfo) => {
  const { 
    deviceInfo, location, timestamp, page, referrer, language, languages,
    screenResolution, viewportSize, timezone, hardware, network, 
    browserFeatures, performance, session 
  } = visitorInfo;

  // Format timestamp for better readability
  const formattedTime = new Date(timestamp).toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  // Determine embed color based on visitor type
  let embedColor = 0x06b6d4; // Cyan for new visitors
  let visitorType = '🆕 New Visitor';
  
  if (session.isReturningVisitor) {
    embedColor = 0x10b981; // Green for returning visitors
    visitorType = `🔄 Returning Visitor (Visit #${session.visitCount})`;
  }

  // Create rich embed for Discord
  const embed = {
    title: `👀 ${visitorType}`,
    color: embedColor,
    timestamp: timestamp,
    fields: [
      {
        name: '📍 Location',
        value: location.error 
          ? location.error 
          : `${location.city}, ${location.region}, ${location.country} (${location.countryCode})`,
        inline: false,
      },
      {
        name: '💻 Device',
        value: `${deviceInfo.deviceType} • ${deviceInfo.browser} on ${deviceInfo.os}`,
        inline: true,
      },
      {
        name: '🌐 IP Address',
        value: location.ip || 'Unknown',
        inline: true,
      },
      {
        name: '🔗 Referrer',
        value: referrer === 'Direct visit' ? '🔗 Direct visit (no referrer)' : `🔗 ${referrer}`,
        inline: false,
      },
      {
        name: '📄 Page URL',
        value: page,
        inline: false,
      },
      {
        name: '🖥️ Screen / Viewport',
        value: `${screenResolution} / ${viewportSize}`,
        inline: true,
      },
      {
        name: '🌍 Language / Timezone',
        value: `${language} / ${timezone}`,
        inline: true,
      },
      {
        name: '⚙️ Hardware Specs',
        value: [
          `• CPU: ${hardware.cpuCores} cores`,
          `• RAM: ${hardware.deviceMemory}`,
          `• Display: ${hardware.colorDepth}, ${hardware.pixelRatio}x pixel ratio`,
          `• Touch: ${hardware.touchSupport ? `Yes (${hardware.maxTouchPoints} points)` : 'No'}`,
          `• Platform: ${hardware.platform}`,
        ].join('\n'),
        inline: false,
      },
      {
        name: '📶 Network Info',
        value: [
          `• Type: ${network.effectiveType.toUpperCase()}`,
          `• Speed: ${network.downlink}`,
          `• Latency: ${network.rtt}`,
          `• Connection: ${network.type}`,
          `• Data Saver: ${network.saveData ? 'Enabled' : 'Disabled'}`,
        ].join('\n'),
        inline: true,
      },
      {
        name: '🔧 Browser Features',
        value: [
          `• Cookies: ${browserFeatures.cookiesEnabled ? '✅' : '❌'}`,
          `• LocalStorage: ${browserFeatures.localStorageEnabled ? '✅' : '❌'}`,
          `• WebGL: ${browserFeatures.webGLSupport ? '✅' : '❌'}`,
          `• Service Worker: ${browserFeatures.serviceWorkerSupport ? '✅' : '❌'}`,
          `• Do Not Track: ${browserFeatures.doNotTrack ? 'Enabled' : 'Disabled'}`,
        ].join('\n'),
        inline: true,
      },
      {
        name: '⚡ Performance',
        value: performance.available !== false ? [
          `• Page Load: ${performance.pageLoadTime}ms`,
          `• DOM Ready: ${performance.domReadyTime}ms`,
          `• DNS Lookup: ${performance.dnsTime}ms`,
          `• Request Time: ${performance.requestTime}ms`,
          `• Navigation: ${performance.navigationType}`,
        ].join('\n') : 'Performance data unavailable',
        inline: true,
      },
      {
        name: '📊 Session Info',
        value: [
          `• Visitor Type: ${session.isReturningVisitor ? 'Returning' : 'First Time'}`,
          `• Visit Count: ${session.visitCount}`,
          `• New Session: ${session.isNewSession ? 'Yes' : 'No'}`,
          session.isReturningVisitor ? `• First Visit: ${new Date(session.firstVisit).toLocaleString()}` : null,
          session.isReturningVisitor ? `• Last Visit: ${new Date(session.lastVisit).toLocaleString()}` : null,
        ].filter(Boolean).join('\n'),
        inline: true,
      },
    ],
    footer: {
      text: `Portfolio Analytics • ${hardware.vendor || 'Unknown Vendor'}`,
    },
  };

  // Add ISP/Organization if available
  if (location.org && !location.error) {
    embed.fields.splice(3, 0, {
      name: '🏢 ISP/Organization',
      value: location.org,
      inline: false,
    });
  }

  // Add additional location details if available
  if (location.postal && !location.error) {
    const locationIndex = embed.fields.findIndex(f => f.name === '📍 Location');
    if (locationIndex !== -1) {
      embed.fields[locationIndex].value += `\n📮 Postal: ${location.postal}`;
    }
  }

  // Send to Discord
  const payload = {
    username: 'Portfolio Analytics',
    avatar_url: 'https://cdn-icons-png.flaticon.com/512/3659/3659898.png', // Analytics icon
    embeds: [embed],
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Discord webhook failed: ${response.status}`);
  }
  
  console.log('✅ Visitor tracked successfully! Notification sent to Discord.');
};

export default trackVisitor;
