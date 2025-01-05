import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getResource } from "../assets/apiHelpers";
import SectionHeader from "../SectionHeader";
import { Container, Box, Typography, Modal } from "@mui/material";
import AddRepairButton from "./AddRepairButton";
import RepairFormWrapper from "./RepairFormWrapper";
import EnquiriesTable from "../Tables/EnquiriesTable";
import DownloadCollectionCsvButton from "../Buttons/DownloadCollectionCsvButton";

const Repairs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort");
  const repairsQuery = useQuery({
    queryKey: ["repairs", sortOrder],
    queryFn: () => getResource("repairs?sort=" + sortOrder),
  });

  const filteredData =
    !repairsQuery.isLoading && !repairsQuery.error
      ? repairsQuery.data.filter((repair) => !repair.completed)
      : [];

  return (
    <Container sx={{ m: 0 }}>
      <SectionHeader title="Repairs" />
      <Box sx={{ display: "flex", w: "100vw", flexWrap: "wrap" }}>
        {repairsQuery.isLoading ? (
          <h1 className="">Loading...</h1>
        ) : repairsQuery.isError ? (
          <h1 className="">Error</h1>
        ) : (
          <>
            {/* < DownloadCollectionCsvButton collection="Repairs" data={filteredData} /> */}
            <AddRepairButton>
              <RepairFormWrapper />
            </AddRepairButton>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Repairs;
