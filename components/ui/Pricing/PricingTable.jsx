/* eslint-disable no-nested-ternary */
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from '@mui/material';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PriceTable() {
  const [type, setType] = useState({
    nigeria: 'local',
    ghana: 'local',
    kenya: 'local',
    southAfrica: 'local',
    USA: 'local'
  });
  const handleChange = ({ target: { value, name } }) => {
    setType({ ...type, [name]: value });
  };
  
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Incorporation</TableCell>
            <TableCell>Trademark</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Bank Account</TableCell>
            {/* <TableCell>Patent</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Nigeria</TableCell>
            <TableCell>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label-nigeria"
                  id="demo-simple-select-nigeria"
                  onChange={handleChange}
                  defaultValue={type?.nigeria}
                  name="nigeria"
                >
                  {[
                    { value: 'local', label: 'Nigerian' },
                    { value: 'foreign', label: 'Non-Nigerian' },
                  ].map((item) => (
                    <MenuItem value={item.value} key={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>
              {type?.nigeria === 'local' ? 'N60,000 / $120' : 'N277,100 / $550'}
            </TableCell>
            <TableCell>N115,000 / $230</TableCell>
            <TableCell>N100,000 / $200 (annual)</TableCell>
            <TableCell>{type?.nigeria === 'local' ? 'N5,000 / $10' : '$0'}</TableCell>
            {/* <TableCell>
              {type?.nigeria === 'local' ? 'N65,000 / $130' : 'N100,000 / $200'}
            </TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell>Ghana</TableCell>
            <TableCell>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label-ghana"
                  id="demo-simple-select-ghana"
                  onChange={handleChange}
                  defaultValue={type?.ghana}
                  name="ghana"
                >
                  {[
                    { value: 'local', label: 'Ghanaian' },
                    {
                      value: 'option1',
                      label: 'GIPC Option 1 (for company not involved in trading)',
                    },
                    { value: 'option2', label: 'GIPC Option 2 (for company involved in trading)' },
                    {
                      value: 'option3',
                      label: 'GIPC Option 3 (Companies with 10% Ghanaian Ownership)',
                    },
                    { value: 'norebase', label: 'Norebase unique Structure' },
                  ].map((item) => (
                    <MenuItem value={item.value} key={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>
              {type?.ghana === 'local'
                ? '$650'
                : type.ghana === 'option1'
                ? '$9,400'
                : type.ghana === 'option2'
                ? '$14,350'
                : type.ghana === 'option3'
                ? '$6,850'
                : '$7,150'}
            </TableCell>
            <TableCell>$1,495</TableCell>
            <TableCell>$240 (annual)</TableCell>
            <TableCell>{type.ghana === 'local' ? '$400' : '$0'}</TableCell>
            {/* <TableCell>$4,050</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell>Kenya</TableCell>
            <TableCell>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label-kenya"
                  id="demo-simple-select-kenya"
                  onChange={handleChange}
                  defaultValue={type?.kenya}
                  name="kenya"
                >
                  {[
                    { value: 'local', label: 'Kenyan' },
                    { value: 'foreign', label: 'Non-Kenya' },
                  ].map((item) => (
                    <MenuItem value={item.value} key={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>{type.kenya === 'local' ? '$700' : '$1,100'}</TableCell>
            <TableCell>$1,050</TableCell>
            <TableCell>$600 (annual)</TableCell>
            <TableCell>{type.kenya === 'local' ? '$200' : '$0'}</TableCell>
            {/* <TableCell>{type.kenya === 'local' ? '$1,870' : '$0'}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell>South Africa</TableCell>
            <TableCell>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label-south"
                  id="demo-simple-select-south"
                  onChange={handleChange}
                  defaultValue={type?.southAfrica}
                  name="southAfrica"
                >
                  {[
                    { value: 'local', label: 'South African' },
                    { value: 'foreign', label: 'Non South Africa' },
                  ].map((item) => (
                    <MenuItem value={item.value} key={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>{type.southAfrica === 'local' ? '$350' : '$350'}</TableCell>
            <TableCell>$605</TableCell>
            <TableCell>$480 (annual)</TableCell>
            <TableCell>{type.southAfrica === 'local' ? '$100' : '$0'}</TableCell>
            {/* <TableCell>{type.southAfrica === 'local' ? '$0' : '$4,050'}</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell>Delaware, USA</TableCell>
            <TableCell>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label-USA"
                  id="demo-simple-select-USA"
                  onChange={handleChange}
                  defaultValue={type?.USA}
                  name="southAfrica"
                >
                  {[
                    { value: 'local', label: 'American' },
                    { value: 'foreign', label: 'Non American' },
                  ].map((item) => (
                    <MenuItem value={item.value} key={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
            <TableCell>{type.USA === 'local' ? '$380' : '$380'}</TableCell>
            <TableCell>$544</TableCell>
            <TableCell>$0</TableCell>
            <TableCell>$0</TableCell>
            {/* <TableCell>{type.southAfrica === 'local' ? '$0' : '$4,050'}</TableCell> */}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
