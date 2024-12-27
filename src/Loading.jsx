import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const skeletonCard = (
  <Box sx={{ minWidth: 275, m: 2, width: 300}}>
    <Card variant="outlined" sx={{height: 445}}>
      {" "}
      <CardContent>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "3rem" }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="rectangular" height={110} />
        <Skeleton variant="rounded" height={60} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        <div className="flex space-x-4">
          <Skeleton variant="circular" width={30} height={30} />
          <Skeleton variant="circular" width={30} height={30} />
        </div>
      </CardContent>
    </Card>
  </Box>
);
export default function Loading() {
  return (
    <>
      {[1,2,3].map((num) => (
        <div key={num}>
        skeletonCard 
        </div>
      ))}
    </>
  );
}
