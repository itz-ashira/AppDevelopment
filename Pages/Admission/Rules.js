import React from 'react';

const Rules = () => {
    document.title="Admission Rules";
    return (
        <div className='container h2-ubuntu'>
            <h1 className='text-center mt-4'>Admission Rules</h1>
            <table className='table table-bordered table-striped text-center mt-4 mb-4'>
                <tbody className='table-primary'>
                    <tr className='table-dark'>
                        <th>Rule No.</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Right of admission is reserved by the principal/management.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>A student seeking admission to the college should present himself/herself along with parent/guardian with an application in the prescribed form duly filled in and signed by him and his parents/guardian.</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>No admission will be regarded as granted unless it is duly granted by the Principal.</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>All admissions are valid only for one academic year and are required to be renewed by application in the prescribed form for the new academic year.</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Once a student is admitted for a degree course, they must complete the course in this college. However, if under any unavoidable circumstances, a student may seek NOC provided he/she has to pay the fees of the entire degree course. The student and parent should have to produce proper documents such as transfer order, etc., for seeking NOC by the college.</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Attendance requirements: Students are required to maintain a minimum attendance percentage as per the college guidelines. Failure to meet this requirement may result in disciplinary action.</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Academic integrity: Students are expected to uphold academic integrity at all times. Any form of plagiarism or cheating will not be tolerated and may lead to severe consequences, including expulsion.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Rules;
