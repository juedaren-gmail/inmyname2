var brokerDomain = {
  scopemarkets: "bounty.run"
};
var brokerPort = {
  scopemarkets: ""
};
var brokerProtocol = {
  scopemarkets: "https://"
};
var shopDomain = {
  scopemarkets: "channel-sea.cc"
};
var brokerName = {
  scopemarkets: "am"
};
var signInShownBrokerName = {
  scopemarkets: "Forex Spread Betting"
};
var shownBrokerName = {
  scopemarkets: "Forex Spread Betting"
};
var brokerCtx = [];
brokerCtx[brokerName.scopemarkets] = {
	brokerName: brokerName.scopemarkets,
	dataStreamURL: brokerProtocol.scopemarkets + brokerDomain.scopemarkets + brokerPort.scopemarkets,
	dataBaseURL: brokerProtocol.scopemarkets + brokerDomain.scopemarkets + brokerPort.scopemarkets,
	orderStreamURL: brokerProtocol.scopemarkets + brokerDomain.scopemarkets + brokerPort.scopemarkets,
	orderBaseURL: brokerProtocol.scopemarkets + brokerDomain.scopemarkets + brokerPort.scopemarkets,
	shopURL: brokerProtocol.scopemarkets + shopDomain.scopemarkets,
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
  FOREX_SPREAD_BETTING: shownBrokerName.scopemarkets
}
