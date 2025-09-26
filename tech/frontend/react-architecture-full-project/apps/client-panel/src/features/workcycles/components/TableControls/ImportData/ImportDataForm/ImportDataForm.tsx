import { useFormikContext } from "formik";

import { Btn, FormikRadio, type HTMLDivProps, ImportIcon, useTranslationV2 } from "ui";

type Props = HTMLDivProps & {
    toNext: (values: { import_type: string }) => void;
    setModalOpen: (open: boolean) => void;
};

export const ImportDataForm = ({ toNext, setModalOpen, ...props }: Props) => {
    const t = useTranslationV2();
    const { values } = useFormikContext<{ import_type: string }>();

    return (
        <div {...props}>
            <div className="import-header">
                <ImportIcon className="icon" />
                <div className="title">{t("workcycles.import_work_cycles")}</div>
            </div>
            <div className="import-content">
                <p className="description">{t("workcycles.choose_import_type")}</p>
                <label>
                    <FormikRadio name="import_type" value="override" className="radio-button" />
                    <div className="text">{t("workcycles.override_existing_data")}</div>
                </label>
                <p className="description">{t("workcycles.override_description")}</p>
                <label>
                    <FormikRadio name="import_type" value="append" className="radio-button" />
                    <div className="text">{t("workcycles.append_data")}</div>
                </label>
                <p className="description">{t("workcycles.append_description")}</p>
            </div>
            <div className="buttons">
                <Btn
                    className="button cancel"
                    variant="secondary-contained"
                    onClick={() => setModalOpen(false)}
                    type="button"
                >
                    {t("Cancel")}
                </Btn>
                <Btn className="button next" variant="primary-contained" type="submit" onClick={() => toNext(values)}>
                    {t("Next")}
                </Btn>
            </div>
        </div>
    );
};
