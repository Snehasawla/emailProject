import { Table, TableCell, TableRow } from "@mui/material";
import data from "../mockData/email.json";
const { emailList } = data;

export default function TableEmail() {
  return (
    <>
      <Table>
        {emailList
          .slice(0)
          .reverse()
          .map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item?.email}</TableCell>
                <TableCell>{item?.subject}</TableCell>
                <TableCell>{item.body}</TableCell>
              </TableRow>
            );
          })}
      </Table>
    </>
  );
}
