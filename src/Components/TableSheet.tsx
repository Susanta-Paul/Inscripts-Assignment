
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import type { TableNode } from '@table-library/react-table-library/table';
import { useState } from 'react';

  


const theme = useTheme({
        HeaderRow: `
            .th {
            border-bottom: 1px solid #a0a8ae;
            }
        `,
        Row: `
            &:not(:last-of-type) .td {
            border-bottom: 1px solid #a0a8ae;
            }
        `,
        BaseCell: `
            &:not(:last-of-type) {
            border-right: 1px solid #a0a8ae;
            }
        `,
    });

    const nodes=[
        {
            id: "1",
            jobRequest: "Deploy backend",
            submitted: "2025-06-30",
            status: "In-Process",
            sumbitter: "Alice",
            assigned: "Bob",
            priority: "High",
            dueDate: "2025-07-05",
            // dueDate: new Date("2025-07-05"),
            estValue: "$5000",
        },
        {
            id: "2",
            jobRequest: "Deploy backend",
            submitted: "2025-06-30",
            status: "In-Process",
            sumbitter: "Alice",
            assigned: "Bob",
            priority: "High",
            dueDate: "2025-07-05",
            // dueDate: new Date("2025-07-05"),
            estValue: "$5000",
        },
        {
            id: "3",
            jobRequest: "Deploy backend",
            submitted: "2025-06-30",
            status: "In-Process",
            sumbitter: "Alice",
            assigned: "Bob",
            priority: "High",
            dueDate: "2025-07-05",
            // dueDate: new Date("2025-07-05"),
            estValue: "$5000",
        },
        {
            id: "4",
            jobRequest: "Deploy backend",
            submitted: "2025-06-30",
            status: "In-Process",
            sumbitter: "Alice",
            assigned: "Bob",
            priority: "High",
            dueDate: "2025-07-05",
            // dueDate: new Date("2025-07-05"),
            estValue: "$5000",
        },
        {
            id: "5",
            jobRequest: "Deploy backend",
            submitted: "2025-06-30",
            status: "In-Process",
            sumbitter: "Alice",
            assigned: "Bob",
            priority: "High",
            dueDate: "2025-07-05",
            // dueDate: new Date("2025-07-05"),
            estValue: "$5000",
        },
        {
            id: "6",
            jobRequest: "",
            submitted: "",
            status: "",
            sumbitter: "",
            assigned: "",
            priority: "",
            dueDate: "",
            // dueDate: new Date("2025-07-05"),
            estValue: "",
        },
        {
            id: "7",
            jobRequest: "",
            submitted: "",
            status: "",
            sumbitter: "",
            assigned: "",
            priority: "",
            dueDate: "",
            // dueDate: new Date("2025-07-05"),
            estValue: "",
        },
        {
            id: "8",
            jobRequest: "",
            submitted: "",
            status: "",
            sumbitter: "",
            assigned: "",
            priority: "",
            dueDate: "",
            // dueDate: new Date("2025-07-05"),
            estValue: "",
        },
        {
            id: "9",
            jobRequest: "",
            submitted: "",
            status: "",
            sumbitter: "",
            assigned: "",
            priority: "",
            dueDate: "",
            // dueDate: new Date("2025-07-05"),
            estValue: "",
        },
        {
            id: "10",
            jobRequest: "",
            submitted: "",
            status: "",
            sumbitter: "",
            assigned: "",
            priority: "",
            dueDate: "",
            // dueDate: new Date("2025-07-05"),
            estValue: "",
        },
        {
            id: "11",
            jobRequest: "",
            submitted: "",
            status: "",
            sumbitter: "",
            assigned: "",
            priority: "",
            dueDate: "",
            // dueDate: new Date("2025-07-05"),
            estValue: "",
        },
        {
            id: "12",
            jobRequest: "",
            submitted: "",
            status: "",
            sumbitter: "",
            assigned: "",
            priority: "",
            dueDate: "",
            // dueDate: new Date("2025-07-05"),
            estValue: "",
        },
    ]





export default function TableSheet() {

    const [data, setData]=useState({nodes});

    interface TaskRow extends TableNode{
        id: string;
        jobRequest: string;
        submitted: string;
        status: 'In-Process' | "Need to Start" | "Blocked" | "Completed";
        sumbitter: string;
        assigned: string;
        priority: "Low" | "Medium" | "High",
        dueDate: string;
        estValue: string;


    }

    const resize = { resizerHighlight: "#dde2eb", resizerWidth: 10 };


    const handleUpdate = (value: string, id: string, property: string) => {
        setData((state) => ({
            nodes: state.nodes.map((node) => {
                if (node.id === id) {
                    return { ...node, [property]: value };
                } else {
                    return node;
                }
            }),
        }));
    };

    return (
        <div className='max-h-screen'>
            <Table data={data} theme={theme} layout={{ fixedHeader: true }}>
                {(tableList: TaskRow[]) => (
                    <>
                    <Header>
                        <HeaderRow>
                        <HeaderCell resize={resize}>
                            <div className='bg-gray-300 text-gray-500'>ID</div>
                        </HeaderCell>
                        <HeaderCell resize={resize}>
                            <div className='bg-gray-300 text-gray-500'>Job Request</div>
                        </HeaderCell>
                        <HeaderCell resize={resize}>
                            <div className='bg-gray-300 text-gray-500'>Submitted</div>
                            </HeaderCell>
                        <HeaderCell resize={resize}>
                            <div className='bg-gray-300 text-gray-500'>Status</div>
                        </HeaderCell>
                        <HeaderCell resize={resize}>
                            <div className='bg-gray-300 text-gray-500'>Sumbitter</div>
                        </HeaderCell>
                        <HeaderCell resize={resize}>Assigned</HeaderCell>
                        <HeaderCell resize={resize}>Priority</HeaderCell>
                        <HeaderCell resize={resize}>Due Date</HeaderCell>
                        <HeaderCell>Est. Value</HeaderCell>
                        </HeaderRow>
                    </Header>

                    <Body>
                        {tableList.map((item)=>(
                            <>
                            <Row key={item.id} item={item}>
                                <Cell> {item.id} </Cell>
                                <Cell>
                                    <input type="text"
                                    value={item.jobRequest}
                                    onChange={(e)=>{handleUpdate(e.target.value, item.id, "jobRequest")}}
                                    />
                                </Cell>
                                <Cell>
                                    <input type="date" 
                                    value={item.submitted}
                                    onChange={(e)=>{handleUpdate(e.target.value, item.id, "submitted")}}
                                    />
                                </Cell>
                                <Cell>
                                    <select 
                                    value={item.status}
                                    onChange={(e)=>{handleUpdate(e.target.value, item.id, "status")}}
                                    >
                                        <option value="Need to Start">Need to Start</option>
                                        <option value="In-Process">In-Process</option>
                                        <option value="Blocked">Blocked</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </Cell>
                                <Cell>
                                    <input type="text"
                                    value={item.sumbitter}
                                    onChange={(e)=>{handleUpdate(e.target.value, item.id, "sumbitter")}}
                                    />
                                </Cell>
                                <Cell>
                                    <input type="text"
                                    value={item.assigned}
                                    onChange={(e)=>{handleUpdate(e.target.value, item.id, "assigned")}}
                                    />
                                </Cell>
                                <Cell>
                                    <select 
                                    value={item.priority}
                                    onChange={(e)=>{handleUpdate(e.target.value, item.id, "priority")}}
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </Cell>
                                <Cell>
                                    <input type="date"
                                    value={item.dueDate}
                                    onChange={(e)=>{handleUpdate(e.target.value, item.id, "dueDate")}}
                                    />
                                </Cell>
                                <Cell>
                                    <input type="text"
                                    value={item.estValue}
                                    onChange={(e)=>{handleUpdate(e.target.value, item.id, "estValue")}}
                                    />
                                </Cell>
                            </Row>
                            
                            </>
                        ))}
                    </Body>
                    </>
                )}
                </Table>
        </div>
    );
};