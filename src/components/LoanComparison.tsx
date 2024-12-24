import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const LoanComparison = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Understanding Federal Loan Types
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare different federal loan options to make an informed decision about your education financing.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Loan Type</TableHead>
                <TableHead>Interest Rate</TableHead>
                <TableHead>Eligibility</TableHead>
                <TableHead>Benefits</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Direct Subsidized</TableCell>
                <TableCell>3.73%</TableCell>
                <TableCell>Undergraduate with financial need</TableCell>
                <TableCell>Government pays interest while in school</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Direct Unsubsidized</TableCell>
                <TableCell>5.28%</TableCell>
                <TableCell>All undergraduate and graduate students</TableCell>
                <TableCell>No financial need requirement</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Direct PLUS</TableCell>
                <TableCell>6.28%</TableCell>
                <TableCell>Graduate students and parents</TableCell>
                <TableCell>Higher borrowing limits</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};