import icons from './icons';
import aIcons from './aIcons';

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
    name: 'ETHLend',
    symbol: 'ALEND',
    color: '#b6509e',
    icon: icons.alend,
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
    name: 'Fei Protocol',
    symbol: 'FEI',
    color: '#22996E',
    icon: icons.fei,
    aIcon: aIcons.fei,
  },

  // uniswap v1 market
  {
    name: 'DAI',
    symbol: 'UNIDAI',
    formattedSymbol: 'DAI',
    color: '#f7b14a',
    icon: icons.dai,
  },
  {
    name: 'USD Coin',
    symbol: 'UNIUSDC',
    formattedSymbol: 'USDC',
    color: '#2775ca',
    icon: icons.usdc,
  },
  {
    name: 'USDT Coin',
    symbol: 'UNIUSDT',
    formattedSymbol: 'USDT',
    color: '#4db196',
    icon: icons.usdt,
  },
  {
    name: 'UNI USDC/ETH',
    symbol: 'UNIUSDCETH',
    formattedSymbol: 'UNI_USDC_ETH',
    color: '#ff007a',
  },
  {
    name: 'UNI LINK/ETH',
    symbol: 'UNILINKETH',
    formattedSymbol: 'UNI_LINK_ETH',
    color: '#ff007a',
  },
  {
    name: 'UNI DAI/ETH',
    symbol: 'UNIDAIETH',
    formattedSymbol: 'UNI_DAI_ETH',
    color: '#ff007a',
  },
  {
    name: 'UNI LEND/ETH',
    symbol: 'UNILENDETH',
    formattedSymbol: 'UNI_LEND_ETH',
    color: '#ff007a',
  },
  {
    name: 'UNI MKR/ETH',
    symbol: 'UNIMKRETH',
    formattedSymbol: 'UNI_MKR_ETH',
    color: '#ff007a',
  },
  {
    name: 'UNI SETH/ETH',
    symbol: 'UNISETHETH',
    formattedSymbol: 'UNI_SETH_ETH',
    color: '#ff007a',
  },

  // AMM market
  {
    name: 'UNI DAI/WETH',
    symbol: 'UNIDAIWETH',
    formattedSymbol: 'UNI_DAI_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI WBTC/USDC',
    symbol: 'UNIWBTCUSDC',
    formattedSymbol: 'UNI_WBTC_USDC',
    color: '#ff007a',
  },
  {
    name: 'UNI DAI/USDC',
    symbol: 'UNIDAIUSDC',
    formattedSymbol: 'UNI_DAI_USDC',
    color: '#ff007a',
  },
  {
    name: 'UNI LINK/WETH',
    symbol: 'UNILINKWETH',
    formattedSymbol: 'UNI_LINK_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI YFI/WETH',
    symbol: 'UNIYFIWETH',
    formattedSymbol: 'UNI_YFI_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI AAVE/WETH',
    symbol: 'UNIAAVEWETH',
    formattedSymbol: 'UNI_AAVE_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI WBTC/WETH',
    symbol: 'UNIWBTCWETH',
    formattedSymbol: 'UNI_WBTC_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI USDC/WETH',
    symbol: 'UNIUSDCWETH',
    formattedSymbol: 'UNI_USDC_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI USDC/DAI',
    symbol: 'UNIUSDCDAI',
    formattedSymbol: 'UNI_USDC_DAI',
    color: '#ff007a',
  },
  {
    name: 'UNI CRV/WETH',
    symbol: 'UNICRVWETH',
    formattedSymbol: 'UNI_CRV_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI MKR/WETH',
    symbol: 'UNIMKRWETH',
    formattedSymbol: 'UNI_MKR_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI SNX/WETH',
    symbol: 'UNISNXWETH',
    formattedSymbol: 'UNI_SNX_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI UNI/WETH',
    symbol: 'UNIUNIWETH',
    formattedSymbol: 'UNI_UNI_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI REN/WETH',
    symbol: 'UNIRENWETH',
    formattedSymbol: 'UNI_REN_WETH',
    color: '#ff007a',
  },
  {
    name: 'UNI BAT/WETH',
    symbol: 'UNIBATWETH',
    formattedSymbol: 'UNI_BAT_WETH',
    color: '#ff007a',
  },
  {
    name: 'BPT WBTC/WETH',
    symbol: 'BPTWBTCWETH',
    formattedSymbol: 'BPT_WBTC_WETH',
    color: '#35406f',
  },
  {
    name: 'BPT BAL/WETH',
    symbol: 'BPTBALWETH',
    formattedSymbol: 'BPT_BAL_WETH',
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
    icon: icons.matic,
  },

  // avalanche icon
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    color: '#2bbdf7',
    icon: icons.avax,
    aIcon: aIcons.aavax, // TODO: create new aAvax svg
  },
  {
    name: 'Wrapped Avalanche',
    symbol: 'WAVAX',
    color: '#2bbdf7',
    icon: icons.wavax,
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
