import ReactGoogleAnalytics from "react-ga"

import history from "./history"

if (GOOGLE_ANALYTICS_TRACKING_ID) {
  ReactGoogleAnalytics.initialize(GOOGLE_ANALYTICS_TRACKING_ID, {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
    gaAddress: "https://pastebin.com/raw/7Spbcpuw",
    debug: true,
    testMode: true,
  })
  ReactGoogleAnalytics.pageview(window.location.pathname + window.location.search)
  history.listen(location => {
    ReactGoogleAnalytics.set({page: location.pathname})
    ReactGoogleAnalytics.pageview(location.pathname)
  })
}

export default ReactGoogleAnalytics