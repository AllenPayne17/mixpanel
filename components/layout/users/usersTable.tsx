/**
 * Renders the table component for the Users section.
 */
'use client'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const UsersTable = () => {
    return (
        <div className="rounded-lg">
            <Table className="border mt-5">
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Distinct ID</TableHead>
                        <TableHead>Updated at</TableHead>
                        <TableHead>Country Code</TableHead>
                        <TableHead>Region</TableHead>
                        <TableHead>City</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>john allen salapayne</TableCell>
                        <TableCell>john.salapayne2001@gmail.com</TableCell>
                        <TableCell>123456</TableCell>
                        <TableCell>2021-09-14</TableCell>
                        <TableCell>US</TableCell>
                        <TableCell>California</TableCell>
                        <TableCell>Los Angeles</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default UsersTable