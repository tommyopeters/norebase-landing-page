import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Pricing.module.css";
import {
  FormControl,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
  FormControlLabel,
} from "@mui/material";
import MuiCheckbox from "@mui/material/Checkbox";
import PriceTable from "./PricingTable";
import Button from "../Button";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

function PricingComponent() {
  const [location, setLocation] = useState([]);
  const [inputData, setInput] = useState({});
  const [total, setTotal] = useState(0);
  // const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setInput({ ...inputData, [name]: value });
  };
  const handleChangeCheck = ({ target: { name, checked } }) => {
    setInput({ ...inputData, [name]: checked });
  };

  useEffect(() => {
    if (
      Object.keys(inputData).length > 0 &&
      inputData?.service &&
      inputData?.country
    ) {
      let totalCal =
        priceEstimateData[inputData?.country][inputData?.service].local;
      if (inputData?.type) {
        const totalType =
          priceEstimateData[inputData?.country][inputData?.service][
            inputData?.type
          ];
        if (totalType !== undefined) {
          totalCal = totalType;
        }
      }
      if (inputData?.address) {
        const totalAddress = priceEstimateData[inputData?.country].address;
        totalCal += totalAddress;
      }
      if (inputData?.bank) {
        const totalBank = priceEstimateData[inputData?.country].bank;

        totalBank !== undefined ? (totalCal += totalBank) : totalCal;
      }
      setTotal(totalCal);
      setLocation(priceType[inputData?.country]);
    }
  }, [inputData]);
  return (
    <main className="main">
      <div>
        <div className={styles.pricing_calculate}>
          <div>
            <h1 className={styles.pricing_cal_text}>
              Get a price estimate in minutes
            </h1>
            <h5 className={styles.pricing_cal_sub_text}>
              Fill in your preferred parameters to get a price estimate
            </h5>
          </div>
        </div>
        <div className={styles.pricing_estimate_container}>
          <div className={styles.pricing_est_sub_container}>
            <div className={styles.pricing_estimate}>
              <div className={styles.pricing_body_estimate}>
                <div className={styles.pricing_body_sub}>
                  <p className={styles.pricing_est_text}>Estimated Cost</p>
                  <p className={styles.pricing_est_total}>
                    Total Cost ={" "}
                    <span className={styles.pricing_est_amount}>
                      {`$${total}`}
                    </span>{" "}
                  </p>
                </div>
                <div className={styles.pricing_est_btn}>
                  {/* <CustomButtons
                        background="rgb(18, 185, 186)"
                        title="Get started"
                        onClick={handleClick}
                        id="pricing-setup-btn"
                      /> */}
                  <Link href="https://start.norebase.com">
                    <Button>Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className={styles.pricing_est_options}>
                <div className={styles.pricing_est_option_sub}>
                  <Grid container spacing={3}>
                    <Grid item md={3} xs={6}>
                      <FormControl
                        component="fieldset"
                        style={{ width: "100%" }}
                      >
                        <FormLabel
                          component="legend"
                          className={styles.pricing_pb_text}
                        >
                          Country:
                        </FormLabel>
                        <TextField
                          select
                          variant="outlined"
                          fullWidth
                          name="country"
                          onChange={handleChange}
                          id="pricing-country"
                        >
                          {countryPricing.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                              {item.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </FormControl>
                    </Grid>
                    <Grid item md={3} xs={6}>
                      <FormControl
                        component="fieldset"
                        style={{ width: "100%" }}
                      >
                        <FormLabel
                          component="legend"
                          className={styles.pricing_pb_text}
                        >
                          Service Type:
                        </FormLabel>
                        <TextField
                          select
                          variant="outlined"
                          fullWidth
                          name="service"
                          onChange={handleChange}
                          id="pricing-service"
                        >
                          {serviceType.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                              {item.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </FormControl>
                    </Grid>
                    <Grid item md={3} xs={6}>
                      <FormControl
                        component="fieldset"
                        style={{ width: "100%" }}
                      >
                        <FormLabel
                          component="legend"
                          className={styles.pricing_pb_text}
                        >
                          Nationality:
                        </FormLabel>
                        <TextField
                          id="pricing-type"
                          select
                          variant="outlined"
                          name="type"
                          fullWidth
                          onChange={handleChange}
                        >
                          {location.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                              {item.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </FormControl>
                    </Grid>
                    <Grid item md={3} xs={6}>
                      <FormControl
                        component="fieldset"
                        style={{ width: "100%" }}
                      >
                        <FormLabel
                          component="legend"
                          className={styles.pricing_pb_text}
                        >
                          Addons:
                        </FormLabel>
                        <Checkbox
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                          label="Address (annual)"
                          name="address"
                          handleChange={handleChangeCheck}
                          id="pricing-address"
                        />
                        <Checkbox
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<RadioButtonCheckedIcon />}
                          label="Bank Account"
                          name="bank"
                          id="pricing-bank"
                          handleChange={handleChangeCheck}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pricing_table_ext}>
            <div className={styles.pricing_table_sub}>
              <PriceTable />
            </div>
          </div>

          {/* <section>
                <div className="home-bottom-footer">
                  <h3>
                    Are you an African business looking to register a Delaware
                    entity?.
                  </h3>
                  <div style={{ marginTop: "50px" }}>
                    <CustomButtons
                      //   onClick={() => handleLogin(instance)}
                      background="rgb(18, 185, 186)"
                      unicode="&#8594;"
                      title="Get Started"
                    />
                  </div>
                </div>
              </section> */}
        </div>
      </div>
    </main>
  );
}

function Checkbox({ label, icon, checkedIcon, handleChange, name }) {
  return (
    <FormControlLabel
      label={label}
      control={
        <MuiCheckbox
          icon={icon}
          checkedIcon={checkedIcon}
          onChange={handleChange}
          name={name}
        />
      }
    />
  );
}

export const priceEstimateData = {
  Nigeria: {
    incorporation: {
      local: 120,
      foreign: 550,
    },
    patent: {
      local: 130,
      foreign: 200,
    },
    trademark: {
      local: 230,
      foreign: 230,
    },
    address: 200,
    bank: 10,
  },
  Ghana: {
    incorporation: {
      local: 650,
      option1: 9400,
      option2: 14350,
      option3: 6850,
      norebase: 7150,
    },
    patent: {
      local: 4050,
      option1: 4050,
      option2: 4050,
      option3: 4050,
      norebase: 4050,
    },
    trademark: {
      local: 1495,
      option1: 1495,
      option2: 1495,
      option3: 1495,
      norebase: 1495,
    },
    address: 240,
    bank: 400,
  },
  Kenya: {
    incorporation: {
      local: 700,
      foreign: 1100,
    },
    patent: {
      local: 1870,
      foreign: 0,
    },
    trademark: {
      local: 1050,
      foreign: 0,
    },
    address: 600,
    bank: 200,
  },
  SouthAfrica: {
    incorporation: {
      local: 350,
      foreign: 350,
    },
    patent: {
      local: 4050,
      foreign: 4050,
    },
    trademark: {
      local: 0,
      foreign: 605,
    },
    address: 480,
    bank: 100,
  },
  USA: {
    incorporation: {
      local: 380,
      foreign: 380,
    },
    patent: {
      local: 0,
      foreign: 0,
    },
    trademark: {
      local: 544,
      foreign: 544,
    },
    address: 0,
    bank: 0,
  },
};

export const serviceType = [
  {
    value: "incorporation",
    label: "Company Incorporation",
  },
  // {
  //     value: 'patent',
  //     label: 'Patent',
  // },
  {
    value: "trademark",
    label: "Trademark",
  },
];
export const countryPricing = [
  {
    value: "Nigeria",
    label: "Nigeria",
  },
  {
    value: "Ghana",
    label: "Ghana",
  },
  {
    value: "Kenya",
    label: "Kenya",
  },
  {
    value: "SouthAfrica",
    label: "South Africa",
  },
  {
    value: "USA",
    label: "Delaware, USA",
  },
];

export const priceType = {
  Nigeria: [
    { value: "local", label: "Nigerian" },
    { value: "foreign", label: "Non-Nigerian" },
  ],
  Ghana: [
    { value: "local", label: "Ghanaian" },
    {
      value: "option1",
      label: "GIPC Option 1 (for company not involved in trading)",
    },
    {
      value: "option2",
      label: "GIPC Option 2 (for company involved in trading)",
    },
    {
      value: "option3",
      label: "GIPC Option 3 (Companies with 10% Ghanaian Ownership)",
    },
    { value: "norebase", label: "Norebase unique Structure" },
  ],
  Kenya: [
    { value: "local", label: "Kenyan" },
    { value: "foreign", label: "Non-Kenya" },
  ],
  SouthAfrica: [
    { value: "local", label: "South African" },
    { value: "foreign", label: "Non South Africa" },
  ],
  USA: [
    { value: "local", label: "American" },
    { value: "foreign", label: "Non American" },
  ],
};

export default PricingComponent;
