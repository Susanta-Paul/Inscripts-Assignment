
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from '@table-library/react-table-library/table';
import {
  useSort,
  HeaderCellSort,
  SortIconPositions,
  SortToggleType,
} from "@table-library/react-table-library/sort";
import { useTheme } from '@table-library/react-table-library/theme';
import type { TableNode } from '@table-library/react-table-library/table';
import { useState } from 'react';
import {nodes} from "./Nodes.ts"

  


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
        url: string;


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


    const sort = useSort(
        data,
        {
        onChange: onSortChange,
        },
        {
        sortFns: {
            JOB: (array) => array.sort((a, b) => a.jobRequest.localeCompare(b.jobRequest)),
            SUMBITTED: (array) => array.sort((a, b) => a.submitted - b.submitted),
            STATUS: (array) => array.sort((a, b) => a.status.localeCompare(b.status)),
            SUBMITTER: (array) => array.sort((a, b) => a.sumbitter.localeCompare(b.sumbitter)),
            ASSIGNED: (array) => array.sort((a, b) => a.assigned.localeCompare(b.assigned)),
            PRIORITY: (array) => array.sort((a, b) => a.priority - b.priority),
            DUEDATE: (array) => array.sort((a, b) => a.dueDate - b.dueDate),
            ESTVAL: (array) => array.sort((a, b) => a.estValue.localeCompare(b.estValue)),
            URL: (array) => array.sort((a, b) => a.url.localeCompare(b.url)),
            
        },
        }
    );
    function onSortChange(action: any, state: any) {
        console.log(action, state);
    }




    return (
        <div className='max-h-screen'>
            <Table data={data} sort={sort} theme={theme} layout={{ fixedHeader: true }}>
                {(tableList: TaskRow[]) => (
                    <>
                    <Header>
                        <HeaderRow>
                        <HeaderCell resize={resize}>
                            <div className='p-2 cursor-pointer bg-gray-300 text-gray-500'>ID</div>
                        </HeaderCell>
                        <HeaderCell resize={resize}>
                            <div className='p-2 cursor-pointer bg-gray-300 text-gray-500'
                            onClick={()=>
                                    sort.fns.onToggleSort({
                                    sortKey: "JOB",
                                })}
                            >Job Request</div>
                        </HeaderCell>
                        <HeaderCell resize={resize}>
                            <div className='p-2 cursor-pointer bg-gray-300 text-gray-500'
                            onClick={()=>
                                    sort.fns.onToggleSort({
                                    sortKey: "SUMBITTED",
                                })}
                            >Submitted</div>
                            </HeaderCell>
                        <HeaderCell resize={resize}>
                            <div className='p-2 cursor-pointer bg-gray-300 text-gray-500'
                            onClick={()=>
                                    sort.fns.onToggleSort({
                                    sortKey: "STATUS",
                                })}
                            >Status</div>
                        </HeaderCell>
                        <HeaderCell resize={resize}>
                            <div className='p-2 cursor-pointer bg-gray-300 text-gray-500'
                            onClick={()=>
                                    sort.fns.onToggleSort({
                                    sortKey: "SUBMITTER",
                                })}
                            >Sumbitter</div>
                        </HeaderCell>
                        <HeaderCell resize={resize}>
                            <div className='p-2 cursor-pointer bg-gray-300 text-gray-500'
                            onClick={()=>
                                    sort.fns.onToggleSort({
                                    sortKey: "URL",
                                })}
                            >URL</div>
                        </HeaderCell>
                        <HeaderCell resize={resize}>
                        <div
                        className='p-2 cursor-pointer text-gray-500 bg-green-200'
                        onClick={()=>
                                    sort.fns.onToggleSort({
                                    sortKey: "ASSIGNED",
                                })}
                        >Assigned</div>
                        </HeaderCell>
                        <HeaderCell resize={resize}>
                            <div
                            className='p-2 cursor-pointer bg-purple-200'
                        onClick={()=>
                                    sort.fns.onToggleSort({
                                    sortKey: "PRIORITY",
                                })}
                        >Priority</div></HeaderCell>
                        <HeaderCell resize={resize}>
                            <div
                            className='p-2 cursor-pointer bg-purple-200'
                        onClick={()=>
                                    sort.fns.onToggleSort({
                                    sortKey: "DUEDATE",
                                })}
                        >Due Date</div></HeaderCell>
                        <HeaderCell>
                            <div
                            className='p-2 cursor-pointer bg-orange-200'
                        onClick={()=>
                                    sort.fns.onToggleSort({
                                    sortKey: "ESTVALcursor-pointer ",
                                })}
                        >Est. Value</div></HeaderCell>
                        </HeaderRow>
                    </Header>

                    <Body>
                        {tableList.map((item)=>(
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
                                    value={item.url}
                                    onChange={(e)=>{handleUpdate(e.target.value, item.id, "url")}}
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
                        ))}
                    </Body>
                    </>
                )}
                </Table>
        </div>
    );
};