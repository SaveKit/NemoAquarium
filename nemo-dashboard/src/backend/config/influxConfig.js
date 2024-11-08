const { InfluxDB } = require("@influxdata/influxdb-client");

const INFLUXDB_URL = "https://us-east-1-1.aws.cloud2.influxdata.com";
const INFLUXDB_TOKEN =
  "mH4GFF56BN39Tpc_VsITx4l1aaBViZmSRpzaKURPN5DajBBNyQjcPSiGgP88e8rEAza_EDqejfEfyhcJVz9m0g==";
const INFLUXDB_ORG = "65050075@kmitl.ac.th";
const queryApi = new InfluxDB({
  url: INFLUXDB_URL,
  token: INFLUXDB_TOKEN,
}).getQueryApi(INFLUXDB_ORG);

module.exports = { queryApi };
