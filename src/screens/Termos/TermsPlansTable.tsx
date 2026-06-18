import type { TermsOfUsePlansTable } from "../types/termsOfUse";

type TermsPlansTableProps = {
  subtitle: string;
  table: TermsOfUsePlansTable;
};

function cellClassName(value: string): string | undefined {
  if (value === "✓") {
    return "termos-table-check";
  }
  if (value === "–" || value === "-") {
    return "termos-table-dash";
  }
  return undefined;
}

export function TermsPlansTable({ subtitle, table }: TermsPlansTableProps): JSX.Element {
  const [featureLabel, basicLabel, premiumLabel, advancedLabel] = table.headerColumns;

  return (
    <>
      <h3 className="termos-plans-subtitle">{subtitle}</h3>
      <div className="termos-plans-table-wrap">
        <div className="termos-plans-table-header">
          <span>{featureLabel}</span>
          <span>{basicLabel}</span>
          <span>{premiumLabel}</span>
          <span>{advancedLabel}</span>
        </div>
        {table.rows.map((row) => (
          <div key={row.feature} className="termos-plans-table-row">
            <span>{row.feature}</span>
            <span className={cellClassName(row.basic)}>{row.basic}</span>
            <span className={cellClassName(row.premium)}>{row.premium}</span>
            <span className={cellClassName(row.advanced)}>{row.advanced}</span>
          </div>
        ))}
      </div>
    </>
  );
}
