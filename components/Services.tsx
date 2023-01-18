import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Textarea,
    Button,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import CardCostum from './Projects';
export default function Services() {
    return (
        <div>
            <div className='lg:px-12 md:px-3 px-1'>
                <div className=' mt-3 '>
                    <div className='grid grid-cols-12 gap-4 '>
                        <div className='lg:col-span-4 md:col-span-12 col-span-12'>
                            <div className='filteration mb-14'>
                                <Select className='dark:bg-bg-dark dark:text-white' label="Filter">
                                    <Option className=''>Front-End</Option>
                                    <Option>Back-End</Option>
                                    <Option>FullStack</Option>
                                    <Option>JavaScript</Option>
                                    <Option>Java</Option>
                                    <Option>Python</Option>
                                </Select>
                            </div>
                            {/* form */}
                            <Card className=" dark:bg-bg-dark">
                                <CardHeader
                                    variant="gradient"
                                    color="blue"
                                    className="mb-4 grid h-28 place-items-center"
                                >
                                    <Typography variant="h3" color="white">
                                        Your Message
                                    </Typography>
                                </CardHeader>
                                <CardBody className="flex flex-col gap-4">
                                    <Input label="Email" size="lg" />
                                    <Input label="Contact Number" size="lg" />
                                    <Textarea label="Message" />
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button variant="gradient" fullWidth>
                                        SEND
                                    </Button>
                                </CardFooter>
                            </Card>

                        </div>
                        <div className='lg:col-span-8 md:col-span-12 col-span-12'>
                            <div className='grid mt-6  lg:grid-cols-2 md:grid-cols-1 gap-5'>
                                <div className='mb-3'>
                                    <CardCostum />
                                </div>
                                <div className=''>
                                    <CardCostum />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
