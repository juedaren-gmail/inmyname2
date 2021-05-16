var brokerDomain = {
  am: "am.fintechee.cloud"
};
var brokerPort = {
  am: ""
};
var brokerProtocol = {
  am: "https://"
};
var shopDomain = {
  am: "channel-sea.cc"
};
var brokerName = {
  am: "in"
};
var signInShownBrokerName = {
  am: "InMyName ATC"
};
var shownBrokerName = {
  am: "InMyName Automated Trading Championship"
};
var brokerCtx = [];
brokerCtx[brokerName.am] = {
	brokerName: brokerName.am,
	dataStreamURL: brokerProtocol.am + brokerDomain.am + brokerPort.am,
	dataBaseURL: brokerProtocol.am + brokerDomain.am + brokerPort.am,
	orderStreamURL: brokerProtocol.am + brokerDomain.am + brokerPort.am,
	orderBaseURL: brokerProtocol.am + brokerDomain.am + brokerPort.am,
	shopURL: brokerProtocol.am + shopDomain.am,
	logoURL: "/images/inmyname_logo.png",
	syncServerSettingStatus: false,
	// server setting
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Liquidity Provider",
	startEndHour: 21,
	swapCalcHour: 21,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
	// server setting
}
var BROKER_NAME = {
  DEMO: "Fintechee Demo",
  FINTECHEE_DEMO: "Fintechee Demo",
  OANDA_DEMO: "Oanda Demo",
  OANDA_LIVE: "Oanda Live",
  FOREX_SPREAD_BETTING: shownBrokerName.am
}
