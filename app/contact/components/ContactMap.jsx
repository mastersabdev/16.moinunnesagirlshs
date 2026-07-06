const ContactMap = () => {
  return (
    <section className="page-card sm:p-8">
      <h2 className="section-title mb-6">আমাদের অবস্থান</h2>
      <div className="w-full h-[400px] bg-slate-100 rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3629.3313315482515!2d91.51304149898968!3d24.543209822175285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDarul%20Hikma%20Jameeya%20Islamia%20Alim%20Madrasah!5e0!3m2!1sen!2sbd!4v1782815026989!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{
            border: "0",
            borderRadius: "0.7rem",
          }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
