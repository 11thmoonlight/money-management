import styled from "styled-components";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale() (1.5) translateX(-7px);
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
`;

const Amount = styled.div`
  font-weight: 600;
`;

const Note = styled.div`
  font-weight: 500;
  color: var(--color-blue-dark);
`;

const Date = styled.div`
  font-weight: 400;
`;

function IncomeRow({ income }) {
  const { isDeleting, deleteIncome } = useDeleteIncome();
  const { isCreating, createIncome } = useCreateIncome();
}
