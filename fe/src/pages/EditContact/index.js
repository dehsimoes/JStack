import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function EditContact() {
  return (
    <>
      <PageHeader
        title="Editar André Silva"
      />
      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
