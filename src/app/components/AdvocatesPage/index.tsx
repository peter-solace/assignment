import React, {useState} from "react";
import useSWR from 'swr';
import PageHeader from "@/app/components/PageHeader";
import AdvocatesTable from "@/app/components/AdvocatesPage/AdvocatesTable";
import SearchForm from "@/app/components/AdvocatesPage/SearchForm";
import fetcher from "@/app/helpers/fetcher";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function AdvocatesPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const {data, error} = useSWR(`/api/advocates?page=${page}&query=${searchTerm}`, fetcher)

  const onSearchValueChange = (value: string) => {
    setPage(1)
    setSearchTerm(value)
  }

  if (error) {
    return <p>Error loading advocates</p>
  }

  return (
    <main>
      <PageHeader>Solace Advocates</PageHeader>
      <SearchForm value={searchTerm}
                  onChange={onSearchValueChange}
                  className="mb-6"/>
      {!data && <LoadingSpinner/>}
      {data && <AdvocatesTable data={data} page={page} onPageChange={(value) => setPage(value)}/>}
    </main>
  );
}
