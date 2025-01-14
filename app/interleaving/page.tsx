import Clock from "@/app/components/clock/page";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export default function Interleaving() {
    return (
        <div className="container py-5">
            <header className="row mb-3 method-label">
                <h1 className="col method-label session-name">Session Name</h1>
                <h2 className="technique-name">Technique: Interleaving</h2>
            </header>

            <div className="row justify-content-center">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="d-flex flex-column gap-3 mb-3">
                                <textarea
                                    className="form-control"
                                    placeholder="Topic 1"
                                ></textarea>
                                <textarea
                                    className="form-control"
                                    placeholder="Topic 2"
                                ></textarea>
                                <textarea
                                    className="form-control"
                                    placeholder="Topic 3"
                                ></textarea>
                            </div>
                            <button className="btn btn-outline-primary">
                                <i className="bi bi-plus-lg"></i> Add Topic
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">

                            <div className="text-center">
                                <Clock/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}