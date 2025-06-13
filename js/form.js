document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const alertBox = document.getElementById('form-alert');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showAlert('Thank you very much for your message! I’ll get in touch with you soon.', 'success');
                form.reset();
            } else {
                showAlert('Ocurrió un error al enviar el mensaje. Inténtalo más tarde.', 'danger');
            }
        } catch (error) {
            showAlert('Error de red. Intenta de nuevo.', 'danger');
        }
    });

    function showAlert(message, type) {
        alertBox.textContent = message;
        alertBox.className = `alert alert-${type} mt-3 show`;
        alertBox.classList.remove('d-none');

        setTimeout(() => {
            alertBox.classList.add('d-none');
            alertBox.classList.remove('show');
        }, 5000);
    }
});