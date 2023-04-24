// system
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import { selectIsLoading, selectError } from 'redux/selectors';
import { Circles } from 'react-loader-spinner';

// components
import { Section } from './Section/Section';
import { PhonebookForm } from './PhonebookComponent/Form/Form';
import { ContactList } from './PhonebookComponent/ContactList/ContactList';
import { Filter } from './PhonebookComponent/Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Add new contacts">
        <PhonebookForm />
      </Section>

      <Section title="Filter contacts">
        <Filter />
      </Section>

      {isLoading && (
        <div
          style={{
            // display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            position: 'fixed',
            top: 100,
            right: 130,
            gap: 20,
          }}
        >
          <Circles
            height="80"
            width="80"
            color="#20B2AA"
            ariaLabel="circles-loading"
            wrapperStyle={{
              display: 'block',
              margin: '0 auto 20px',
            }}
            wrapperClass=""
            visible={true}
          />
          <span>Loading...</span>
        </div>
      )}

      {error ? (
        <Section title="Error">
          <div style={{ textAlign: 'center', fontSize: 24 }}>{error}</div>
        </Section>
      ) : (
        <Section title="Contact List">
          <ContactList />
        </Section>
      )}
    </>
  );
};
