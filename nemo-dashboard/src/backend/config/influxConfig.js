const { InfluxDB } = require("@influxdata/influxdb-client");

const INFLUXDB_URL = "https://us-east-1-1.aws.cloud2.influxdata.com";
const INFLUXDB_TOKEN =
  "d-z3U-QWQImhguDKPbo918de47pM9T_70HaV08ati0Eb-5lWTaBeqLCpv7RDH_bggegM22soIi6aQ30bL2LyIQ==";
const INFLUXDB_ORG = "65050075@kmitl.ac.th";
const queryApi = new InfluxDB({
  url: INFLUXDB_URL,
  token: INFLUXDB_TOKEN,
}).getQueryApi(INFLUXDB_ORG);

module.exports = { queryApi };
