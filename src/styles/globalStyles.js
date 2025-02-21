// src/styles/globalStyles.js
const globalStyles = {
    title: {
        margin: 0,
        fontSize: '1.4rem',
        fontWeight: 'bold',
    },
    nav: {
        display: 'flex',
    },
    link: {
        color: '#333',
        marginLeft: '1rem',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '0.95rem',
    },

    // Heroセクション (写真を右、文字を左)
    heroSection: {
        width: '100%',
        textAlign: 'left',         // 左寄せを基本としつつ
        backgroundColor: '#fafafa',
        marginBottom: '2rem',
        padding: '2.8rem 1rem',      // 上下左右の余白
    },
    heroTextContainer: {
        flex: 1,                   // テキストエリアが残りを埋める
    },
    heroTitle: {
        fontSize: '5rem',
        margin: '0 0 1rem',
    },
    heroSubtitle: {
        fontSize: '1.2rem',
        color: '#666',
        margin: 0,
    },

    section: {
        marginBottom: '2rem',
    },
    card: {
        padding: '2rem',
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '1rem',
        marginBottom: '1rem',
    },
    sectionTitle: {
        margin: 0,
        fontSize: '3.5rem',
    },
    subtitle: {
        margin: 0,
        fontSize: '0.8rem',
        color: '#666',
    },
    text: {
        lineHeight: 1.6,
        fontSize: '0.95rem',
        margin: '0.5rem 0',
    },
    mailLink: {
        color: '#0066cc',
        textDecoration: 'underline',
    },
    skillList: {
        listStyle: 'none',
        paddingLeft: 0,
        margin: 0,
        lineHeight: 1.8,
    },
    workItem: {
        marginBottom: '2rem',
    },
    workTitle: {
        fontSize: '1.1rem',
        margin: '1rem 0 0.5rem 0',
        color: '#333',
    },
    workItemContainer: {
        display: 'block',            // カード全体をクリック領域に
        border: '1px solid #ccc',    // 枠線
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1.5rem',
        color: 'inherit',            // 文字色を継承
        textDecoration: 'none',      // 下線を消してカード風
    },

    footer: {
        borderTop: '1px solid #eee',
        padding: '1rem',
        textAlign: 'center',
        backgroundColor: '#2b2b2b',
        marginBottom: '1rem',
    },
    footerLinks: {
        marginBottom: '0.5rem',
    },
    footerLink: {
        margin: '0 0.5rem',
        color: '#0066cc',
        textDecoration: 'underline',
        fontSize: '0.9rem',
    },
    footerText: {
        fontSize: '0.9rem',
        color: '#fff',
    },
};

export default globalStyles;
