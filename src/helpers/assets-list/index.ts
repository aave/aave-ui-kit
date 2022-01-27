import aIcons from './aIcons';
import icons from './icons';

export interface Asset {
  name: string;
  symbol: string;
  formattedSymbol?: string;
  color?: string;
  icon?: string;
  aIcon?: string;
  symbolFormatted?: string;
  symbolsArray?: string[];
  formattedName?: string;
  shortSymbol?: string;
}

export const assetsList: Asset[] = [
  {
    name: 'Aave',
    symbol: 'AAVE',
    color: '#b6509e',
    icon: icons.aave,
    aIcon: aIcons.aaave,
  },
  {
    name: 'Stake Aave',
    symbol: 'STKAAVE',
    color: '#b6509e',
    icon: icons.stkaave,
    aIcon: aIcons.astkaave,
  },
  {
    name: 'Basic Attention Token',
    symbol: 'BAT',
    color: '#662d91',
    icon: icons.bat,
    aIcon: aIcons.abat,
  },
  {
    name: 'Binance USD',
    symbol: 'BUSD',
    color: '#f0b90b',
    icon: icons.busd,
    aIcon: aIcons.abusd,
  },
  {
    name: 'DAI',
    symbol: 'DAI',
    color: '#f7b14a',
    icon: icons.dai,
    aIcon: aIcons.adai,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    color: '#000000',
    icon: icons.eth,
    aIcon: aIcons.aeth,
  },
  {
    name: 'Wrapped ETH',
    symbol: 'WETH',
    color: '#000000',
    icon: icons.weth,
    aIcon: aIcons.aweth,
  },
  {
    name: 'Kyber Legacy',
    symbol: 'KNC',
    formattedSymbol: 'KNCL',
    color: '#28be50',
    icon: icons.knc,
    aIcon: aIcons.aknc,
  },
  {
    name: 'ETHLend',
    symbol: 'LEND',
    color: '#b6509e',
    icon: icons.lend,
    aIcon: aIcons.alend,
  },
  {
    name: 'ChainLink',
    symbol: 'LINK',
    color: '#2463ff',
    icon: icons.link,
    aIcon: aIcons.alink,
  },
  {
    name: 'Decentraland',
    symbol: 'MANA',
    color: '#ff4355',
    icon: icons.mana,
    aIcon: aIcons.amana,
  },
  {
    name: 'Maker',
    symbol: 'MKR',
    color: '#17e5bd',
    icon: icons.mkr,
    aIcon: aIcons.amkr,
  },
  {
    name: 'Augur',
    symbol: 'REP',
    color: '#581c49',
    icon: icons.rep,
    aIcon: aIcons.arep,
  },
  {
    name: 'SNX',
    symbol: 'SNX',
    color: '#00d1ff',
    icon: icons.snx,
    aIcon: aIcons.asnx,
  },
  {
    name: 'sUSD',
    symbol: 'SUSD',
    color: '#8a8895',
    icon: icons.susd,
    aIcon: aIcons.asusd,
  },
  {
    name: 'TrueUSD',
    symbol: 'TUSD',
    color: '#002868',
    icon: icons.tusd,
    aIcon: aIcons.atusd,
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    color: '#2775ca',
    icon: icons.usdc,
    aIcon: aIcons.ausdc,
  },
  {
    name: 'USDT Coin',
    symbol: 'USDT',
    color: '#4db196',
    icon: icons.usdt,
    aIcon: aIcons.ausdt,
  },
  {
    name: 'WBTC Coin',
    symbol: 'WBTC',
    color: '#ff7600',
    icon: icons.wbtc,
    aIcon: aIcons.awbtc,
  },
  {
    name: '0x Coin',
    symbol: 'ZRX',
    color: '#d1d0d0',
    icon: icons.zrx,
    aIcon: aIcons.azrx,
  },
  {
    name: 'sETH',
    symbol: 'SETH',
    color: '#524e4b',
    icon: icons.seth,
  },
  {
    name: 'EnjinCoin',
    symbol: 'ENJ',
    color: '#7866d4',
    icon: icons.enj,
    aIcon: aIcons.aenj,
  },
  {
    name: 'REN',
    symbol: 'REN',
    color: '#123f73',
    icon: icons.ren,
    aIcon: aIcons.aren,
  },
  {
    name: 'yearn.finance',
    symbol: 'YFI',
    color: '#10a1cc',
    icon: icons.yfi,
    aIcon: aIcons.ayfi,
  },
  {
    name: 'Uniswap',
    symbol: 'UNI',
    color: '#ff007a',
    icon: icons.uni,
    aIcon: aIcons.auni,
  },
  {
    name: 'Gemini Dollar',
    symbol: 'GUSD',
    color: '#4db6c6',
    icon: icons.gusd,
    aIcon: aIcons.agusd,
  },
  {
    name: 'Curve DAO Token',
    symbol: 'CRV',
    color: '#ff1e00',
    icon: icons.crv,
    aIcon: aIcons.acrv,
  },
  {
    name: 'Balancer',
    symbol: 'BAL',
    color: '#35406f',
    icon: icons.bal,
    aIcon: aIcons.abal,
  },
  {
    name: 'xSUSHI',
    symbol: 'XSUSHI',
    color: '#e88e2e',
    icon: icons.xsushi,
    aIcon: aIcons.axsushi,
  },
  {
    name: 'renFIL',
    symbol: 'RENFIL',
    color: '#b9b9b9',
    icon: icons.renfil,
    aIcon: aIcons.arenfil,
  },
  {
    name: 'Ampleforth',
    symbol: 'AMPL',
    color: '#ff2e55',
    icon: icons.ampl,
    aIcon: aIcons.aampl,
  },
  {
    name: 'Rai Reflex Index',
    symbol: 'RAI',
    color: '#20c182',
    icon: icons.rai,
    aIcon: aIcons.arai,
  },
  {
    name: 'Paxos Standard',
    symbol: 'PAX',
    color: '#eee809',
    icon: icons.pax,
    aIcon: aIcons.apax,
  },
  {
    name: 'DeFi Pulse Index',
    symbol: 'DPI',
    color: '#9B74EC',
    icon: icons.dpi,
    aIcon: aIcons.adpi,
  },
  {
    name: 'Frax',
    symbol: 'FRAX',
    color: '#484848',
    icon: icons.frax,
    aIcon: aIcons.afrax,
  },
  {
    name: 'USDP',
    symbol: 'USDP',
    color: '#eee809',
    icon: icons.usdp,
    aIcon: aIcons.ausdp,
  },
  {
    name: 'Fei USD',
    symbol: 'FEI',
    color: '#22996E',
    icon: icons.fei,
    aIcon: aIcons.fei,
  },
  {
    name: 'STASIS EURO',
    symbol: 'EURS',
    color: '#406BEE',
    icon: icons.eurs,
    aIcon: aIcons.aeurs,
  },
  {
    name: 'Aavegotchi',
    symbol: 'GHST',
    color: '#f133f3',
    icon: icons.ghst,
    aIcon: aIcons.aghst,
  },

  // uniswap v1 market
  {
    name: 'DAI',
    symbol: 'UNIDAI',
    formattedSymbol: 'DAI',
    color: '#f7b14a',
    icon: icons.dai,
    aIcon: aIcons.adai,
  },
  {
    name: 'USD Coin',
    symbol: 'UNIUSDC',
    formattedSymbol: 'USDC',
    color: '#2775ca',
    icon: icons.usdc,
    aIcon: aIcons.ausdc,
  },
  {
    name: 'USDT Coin',
    symbol: 'UNIUSDT',
    formattedSymbol: 'USDT',
    color: '#4db196',
    icon: icons.usdt,
    aIcon: aIcons.ausdt,
  },
  {
    name: 'UNI USDC/ETH',
    symbol: 'UNIUSDCETH',
    formattedSymbol: 'UNI_USDC_ETH',
    shortSymbol: 'USDC/ETH',
    color: '#ff007a',
  },
  {
    name: 'UNI LINK/ETH',
    symbol: 'UNILINKETH',
    formattedSymbol: 'UNI_LINK_ETH',
    shortSymbol: 'LINK/ETH',
    color: '#ff007a',
  },
  {
    name: 'UNI DAI/ETH',
    symbol: 'UNIDAIETH',
    formattedSymbol: 'UNI_DAI_ETH',
    shortSymbol: 'DAI/ETH',
    color: '#ff007a',
  },
  {
    name: 'UNI LEND/ETH',
    symbol: 'UNILENDETH',
    formattedSymbol: 'UNI_LEND_ETH',
    shortSymbol: 'LEND/ETH',
    color: '#ff007a',
  },
  {
    name: 'UNI MKR/ETH',
    symbol: 'UNIMKRETH',
    formattedSymbol: 'UNI_MKR_ETH',
    shortSymbol: 'MKR/ETH',
    color: '#ff007a',
  },
  {
    name: 'UNI SETH/ETH',
    symbol: 'UNISETHETH',
    formattedSymbol: 'UNI_SETH_ETH',
    shortSymbol: 'SETH/ETH',
    color: '#ff007a',
  },

  // AMM market
  {
    name: 'UNI DAI/WETH',
    symbol: 'UNIDAIWETH',
    formattedSymbol: 'UNI_DAI_WETH',
    shortSymbol: 'DAI/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI WBTC/USDC',
    symbol: 'UNIWBTCUSDC',
    formattedSymbol: 'UNI_WBTC_USDC',
    shortSymbol: 'WBTC/USDC',
    color: '#ff007a',
  },
  {
    name: 'UNI DAI/USDC',
    symbol: 'UNIDAIUSDC',
    formattedSymbol: 'UNI_DAI_USDC',
    shortSymbol: 'DAI/USDC',
    color: '#ff007a',
  },
  {
    name: 'UNI LINK/WETH',
    symbol: 'UNILINKWETH',
    formattedSymbol: 'UNI_LINK_WETH',
    shortSymbol: 'LINK/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI YFI/WETH',
    symbol: 'UNIYFIWETH',
    formattedSymbol: 'UNI_YFI_WETH',
    shortSymbol: 'YFI/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI AAVE/WETH',
    symbol: 'UNIAAVEWETH',
    formattedSymbol: 'UNI_AAVE_WETH',
    shortSymbol: 'AAVE/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI WBTC/WETH',
    symbol: 'UNIWBTCWETH',
    formattedSymbol: 'UNI_WBTC_WETH',
    shortSymbol: 'WBTC/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI USDC/WETH',
    symbol: 'UNIUSDCWETH',
    formattedSymbol: 'UNI_USDC_WETH',
    shortSymbol: 'USDC/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI USDC/DAI',
    symbol: 'UNIUSDCDAI',
    formattedSymbol: 'UNI_USDC_DAI',
    shortSymbol: 'USDC/DAI',
    color: '#ff007a',
  },
  {
    name: 'UNI CRV/WETH',
    symbol: 'UNICRVWETH',
    formattedSymbol: 'UNI_CRV_WETH',
    shortSymbol: 'CRV/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI MKR/WETH',
    symbol: 'UNIMKRWETH',
    formattedSymbol: 'UNI_MKR_WETH',
    shortSymbol: 'MKR/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI SNX/WETH',
    symbol: 'UNISNXWETH',
    formattedSymbol: 'UNI_SNX_WETH',
    shortSymbol: 'SNX/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI UNI/WETH',
    symbol: 'UNIUNIWETH',
    formattedSymbol: 'UNI_UNI_WETH',
    shortSymbol: 'UNI/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI REN/WETH',
    symbol: 'UNIRENWETH',
    formattedSymbol: 'UNI_REN_WETH',
    shortSymbol: 'REN/WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI BAT/WETH',
    symbol: 'UNIBATWETH',
    formattedSymbol: 'UNI_BAT_WETH',
    shortSymbol: 'BAT/WETH',
    color: '#ff007a',
  },
  {
    name: 'G-UNI DAI/USDC',
    symbol: 'GUNIDAIUSDC',
    formattedSymbol: 'GUNI_DAI_USDC',
    shortSymbol: 'DAI/USDC',
    color: '#ff007a',
  },
  {
    name: 'G-UNI USDC/USDT',
    symbol: 'GUNIUSDCUSDT',
    formattedSymbol: 'GUNI_USDC_USDT',
    shortSymbol: 'USDC/USDT',
    color: '#ff007a',
  },
  {
    name: 'BPT WBTC/WETH',
    symbol: 'BPTWBTCWETH',
    formattedSymbol: 'BPT_WBTC_WETH',
    shortSymbol: 'WBTC/WETH',
    color: '#35406f',
  },
  {
    name: 'BPT BAL/WETH',
    symbol: 'BPTBALWETH',
    formattedSymbol: 'BPT_BAL_WETH',
    shortSymbol: 'BAL/WETH',
    color: '#35406f',
  },
  {
    name: 'BPT WETH/DAI',
    symbol: 'BPTWETHDAI',
    formattedSymbol: 'BPT_WETH_DAI',
    shortSymbol: 'WETH/DAI',
    color: '#35406f',
  },
  {
    name: 'BPT USDC/WETH',
    symbol: 'BPTUSDCWETH',
    formattedSymbol: 'BPT_USDC_WETH',
    shortSymbol: 'USDC/WETH',
    color: '#35406f',
  },
  {
    name: 'BPT WETH/USDT',
    symbol: 'BPTWETHUSDT',
    formattedSymbol: 'BPT_WETH_USDT',
    shortSymbol: 'WETH/USDT',
    color: '#35406f',
  },
  {
    name: 'BPT MKR/WETH',
    symbol: 'BPTMKRWETH',
    formattedSymbol: 'BPT_MKR_WETH',
    shortSymbol: 'MKR/WETH',
    color: '#35406f',
  },
  {
    name: 'BPT SNX/WETH',
    symbol: 'BPTSNXWETH',
    formattedSymbol: 'BPT_SNX_WETH',
    shortSymbol: 'SNX/WETH',
    color: '#35406f',
  },
  {
    name: 'BPT YFI/WETH',
    symbol: 'BPTYFIWETH',
    formattedSymbol: 'BPT_YFI_WETH',
    shortSymbol: 'YFI/WETH',
    color: '#35406f',
  },
  {
    name: 'BPT LINK/WETH',
    symbol: 'BPTLINKWETH',
    formattedSymbol: 'BPT_LINK_WETH',
    shortSymbol: 'LINK/WETH',
    color: '#35406f',
  },
  {
    name: 'BPT DPI/WBTC/WETH',
    symbol: 'BPTDPIWBTCWETH',
    formattedSymbol: 'BPT_DPI_WBTC_WETH',
    shortSymbol: 'DPI/WBTC/WETH',
    color: '#35406f',
  },

  // bpt icon
  {
    name: 'BPT',
    symbol: 'BPT',
    color: '#35406f',
    icon: icons.bpt,
  },

  // matic icon
  {
    name: 'Matic',
    symbol: 'MATIC',
    color: '#2bbdf7',
    icon: icons.matic,
    aIcon: aIcons.amatic,
  },
  {
    name: 'Wrapped Matic',
    symbol: 'WMATIC',
    color: '#2bbdf7',
    icon: icons.wmatic,
    aIcon: aIcons.awmatic,
  },

  // avalanche icon
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    color: '#E84142',
    icon: icons.avax,
    aIcon: aIcons.aavax,
  },
  {
    name: 'Wrapped Avalanche',
    symbol: 'WAVAX',
    color: '#E84142',
    icon: icons.wavax,
  },
  {
    name: 'Aave (AAVE.e)',
    symbol: 'AAVE.E',
    formattedSymbol: 'AAVE.e',
    color: '#b6509e',
    icon: icons.aave,
    aIcon: aIcons.aaave,
  },
  {
    name: 'DAI (DAI.e)',
    symbol: 'DAI.E',
    formattedSymbol: 'DAI.e',
    color: '#f7b14a',
    icon: icons.dai,
    aIcon: aIcons.adai,
  },
  {
    name: 'Wrapped ETH (WETH.e)',
    symbol: 'WETH.E',
    formattedSymbol: 'WETH.e',
    color: '#000000',
    icon: icons.weth,
    aIcon: aIcons.aweth,
  },
  {
    name: 'USD Coin (USDC.e)',
    symbol: 'USDC.E',
    formattedSymbol: 'USDC.e',
    color: '#2775ca',
    icon: icons.usdc,
    aIcon: aIcons.ausdc,
  },
  {
    name: 'USDT Coin (USDT.e)',
    symbol: 'USDT.E',
    formattedSymbol: 'USDT.e',
    color: '#4db196',
    icon: icons.usdt,
    aIcon: aIcons.ausdt,
  },
  {
    name: 'WBTC Coin (WBTC.e)',
    symbol: 'WBTC.E',
    formattedSymbol: 'WBTC.e',
    color: '#ff7600',
    icon: icons.wbtc,
    aIcon: aIcons.awbtc,
  },

  // Tribe
  {
    name: 'Tribe',
    symbol: 'TRIBE',
    color: '#358ed0',
    icon: icons.tribe,
  },

  // fantom
  {
    name: 'FTM',
    symbol: 'FTM',
    color: '#358ed0',
    icon: icons.ftm,
    aIcon: aIcons.aftm,
  },
  {
    name: 'Wrapped FTM',
    symbol: 'WFTM',
    color: '#358ed0',
    icon: icons.wftm,
    aIcon: aIcons.awftm,
  },
  // harmony
  {
    name: 'ONE',
    symbol: 'ONE',
    color: '#358ed0',
    icon: icons.one,
    aIcon: icons.aone,
  },
  {
    name: 'Wrapped ONE',
    symbol: 'WONE',
    color: '#358ed0',
    icon: icons.wone,
    aIcon: icons.awone,
  },
];

export const getAssetInfoFactory = (_assetsList: Asset[]) => (_assetSymbol: string): Asset => {
  const assetSymbol = _assetSymbol.toUpperCase();
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const asset = _assetsList.find((asset: Asset) => asset.symbol === assetSymbol);
  const symbolFormatted = (asset && asset.formattedSymbol) || (asset && asset.symbol);
  const symbolsArray = symbolFormatted?.split('_').filter(e => String(e).trim());

  const isSymbolsArrayMoreThanOne = !!symbolsArray && symbolsArray.length > 1;
  const formattedName = isSymbolsArrayMoreThanOne ? asset && asset.name : symbolFormatted;

  if (asset) {
    return {
      ...asset,
      symbolFormatted,
      symbolsArray,
      formattedName,
    };
  }

  return {
    name: assetSymbol,
    symbol: assetSymbol,
  };
};

export const getAssetInfo = getAssetInfoFactory(assetsList);
