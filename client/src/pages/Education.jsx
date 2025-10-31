import "./Education.css";

export default function Education() {
    return (
        <div className="education-container">
            <h1 className="education-title">Education Qualification</h1>
            
            <div className="education-item">
                <div className="education-degree">High School Diploma</div>
                <div className="education-school">Saupin's School</div>
                <div className="education-year">Graduated 2024</div>
            </div>

            <div className="education-item">
                <div className="education-degree">Software Engineering Technology</div>
                <div className="education-school">Centennial College</div>
                <div className="education-year">Expected Graduation 2027</div>
            </div>
        </div>
    );
}