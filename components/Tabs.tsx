import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import React from "react";
import CardCostum from "./Projects";
import Services from "./Services";
// import { Preview, print } from "react-html2pdf";
import Cv from "./cv";


export default function TabsFeature() {

    const data = [
        {
            label: "Skills",
            value: "html",
            desc: (
                <React.Fragment>
                    <Cv />
                </React.Fragment>
            )
        },
        {
            label: "Projects",
            value: "react",
            desc: (
                <React.Fragment>
                    <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                        {
                            Array(4, 8, 4).map((_, index) => (
                                <div className="mb-6" key={index}>
                                    <CardCostum />
                                </div>
                            ))
                        }
                    </div>
                </React.Fragment>

            )
        },
        {
            label: "Freelance",
            value: "svelte",
            desc: (
                <React.Fragment>
                    <Services />
                </React.Fragment>
            )
        },
    ];
   
  

    return (
        <React.Fragment>
            <Tabs value="html">
                <TabsHeader className="dark:bg-bg-dark ">
                    {data.map(({ label, value }) => (
                        <Tab className=" dark:text-dark" key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map((data) => (
                        <TabPanel key={data.value} value={data?.value}>
                            {data?.desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </React.Fragment>
    );
}