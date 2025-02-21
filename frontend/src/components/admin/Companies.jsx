import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import './Companies.css';

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setSearchCompanyByText(input));
    },[input]);
    
    return (
        <div>
            <Navbar />
            <div className="companies-container max-w-6xl mx-auto my-10">
                <div className="companies-header flex items-center justify-between my-5">
                    <Input
                        className="companies-input w-fit"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button className="companies-button" onClick={() => navigate("/admin/companies/create")}>
                        New Company
                    </Button>
                </div>
                <CompaniesTable />
            </div>
        </div>
    );
    
}

export default Companies