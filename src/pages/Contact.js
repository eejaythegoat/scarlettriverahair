// ...imports...
const handleBookNowClick = () => {
  ReactGA.event("book_now_button_clicked", {
    page_location: window.location.pathname,
    page_title: document.title
  });
};

const handleEmailClick = () => {
  ReactGA.event("email_link_clicked", {
    page_location: window.location.pathname,
    page_title: document.title
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = formRef.current;
  const data = new FormData(form);

  fetch("/", {
    method: "POST",
    body: data,
  })
    .then(() => setSubmitted(true))
    .catch((error) => {
      alert(error);
      setIsSubmitting(false); // Re-enable button if error
    });
  ReactGA.event("contact_form_submitted", {
    page_location: window.location.pathname,
    page_title: document.title
  });
};