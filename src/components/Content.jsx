import React from 'react'

const Content = ({ results }) => {
    return (
        <div className="container">
            <table className="table-responsive">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result.id}>
                            <td>{result.id}</td>
                            <td>{result.slot1}</td>
                            <td>{result.slot2}</td>
                            <td>{result.slot3}</td>
                            <td>{result.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="row">
                <button
                    type="button"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Nuevo juego</button>
            </div>
        </div>
    );
}

export default Content;