import styled from "@emotion/styled";
import Link from "next/link";

interface typeProps {
  label: string;
  page: string;
}

export default function ButtonLink({ label, page }: typeProps) {
  const MainDiv = styled.div({
    width: "250px",
    height: "110px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    padding: "0 4%",

    fontSize: "22px",
    fontWeight: "bold",
    color: "#504058",
  });

  const Button = styled.div({
    padding: "8px 50px",
    borderRadius: "30px",
    background: " #fdd207",
    cursor: "pointer",
    boxShadow: "0px 2px 2px #4747474c",
    fontSize: "26px",
  });

  return (
    <MainDiv>
      <Link href={page}>
        <Button>{label}</Button>
      </Link>
    </MainDiv>
  );
}
