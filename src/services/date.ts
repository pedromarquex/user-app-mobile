import { format, parseISO } from "date-fns";

function parseDateTime(date: string) {
  console.log(date);
  return format(parseISO(date), "dd' de 'MMMM' de 'yyyy' às 'HH:mm", {
    locale: require("date-fns/locale/pt-BR"),
  });
}

export { parseDateTime };
