import React from 'react'

function Paragraph({ theme }) {
    console.log('theme:', theme);
    return (
        <div className={theme}>
            <h1>Bài thơ về mẹ 4 chữ số 3</h1>
            <p>Chín tháng mười ngày</p>
            <p>Mẹ nâng niu con</p>
            <p>Khi được vuông tròn</p>
            <p>Mẹ chăm mẹ bẵm</p> <br />

            <p>Tuổi xanh tươi thắm</p>
            <p>Đến lúc bạc đầu</p>
            <p>Mẹ vẫn lo âu</p>
            <p>Con mình bé bỏng</p><br />

            <p>Từng đêm trông ngóng</p>
            <p>Con ngủ bình yên</p>
            <p>Tiếng nói dịu hiền</p>
            <p>Mẹ khuyên con học</p><br />

            <p>Nhận bao khó nhọc</p>
            <p>Mẹ bao bọc con</p>
            <p>Khôn lớn vẫn còn</p>
            <p>Cơm no, áo ấm</p><br />

            <p>Mồ hôi mẹ thấm</p>
            <p>Bước đường con đi</p>
            <p>Mẹ chẳng có gì</p>
            <p>Ngoài con tất cả</p><br />

            <p>Trời cao hỷ xả</p>
            <p>Xin nhận lời con</p>
            <p>Để mẹ mãi còn</p>
            <p>Bên con mãi mãi!</p>
        </div>
    )
}

export default Paragraph
