interface TotalData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

interface HistoricalData {
  country: string;
  province: string[];
  timeline: {
    cases: {
      [key: string]: number;
    };
    deaths: {
      [key: string]: number;
    };
    recovered: {
      [key: string]: number;
    };
  };
}

interface VaccineData {
  response: Response;
}

interface Response {
  body: Body;
}

interface Body {
  dataTime: string;
  items: Items;
}

interface Items {
  item: Item[];
}

interface Item {
  tpcd: Text;
  firstCnt: Text;
  secondCnt: Text;
  thirdCnt: Text;
}

interface Text {
  text: string;
}

enum LastDays {
  Week = 8,
  Month = 31,
  Year = 366,
}

export type { TotalData, HistoricalData, VaccineData, LastDays, Items };
