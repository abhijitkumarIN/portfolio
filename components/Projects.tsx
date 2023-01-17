import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export default function CardCostum() {
    return (
        <Card className="bg-white dark:bg-bg-dark ">
            <CardHeader color="blue" className="relative h-56">
                <img
                    src="https://www.material-tailwind.com/_next/image?url=%2Fimg%2Fblog.jpg&w=1920&q=75"
                    alt=" "
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2  dark:text-white">
                    Right now coming Soon
                </Typography>
                <Typography  className="dark:text-dark">
                   it is just dummy text 
                   it is just dummy text 
                   it is just dummy text 
                   it is just dummy text 
                   it is just dummy text 
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between py-3">
                <Typography variant="small" className="dark:text-dark">Jan 22 - 2003</Typography>
                <Typography variant="small" color="gray" className="flex gap-1 dark:text-dark">
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                   Area 52 , Noida 180
                </Typography>
            </CardFooter>
        </Card>
    )
}