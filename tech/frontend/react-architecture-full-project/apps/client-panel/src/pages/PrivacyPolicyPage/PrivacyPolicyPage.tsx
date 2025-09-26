/* eslint-disable react/no-array-index-key */
import { HTMLProps } from "react";

import { useTranslationV2 } from "ui";

export const PrivacyPolicyPage = (props: HTMLProps<HTMLDivElement>) => {
    const t = useTranslationV2();
    const text = t("privacyPolicyPage", { returnObjects: true, defaultValue: {} }) as Record<string, any>;

    return (
        <div {...props}>
            <div className="page-title">{text.title}</div>
            <div className="card">
                <div className="text-bold">
                    <strong>{text.last_updated}</strong>
                </div>
                <div className="text">{text.intro}</div>

                <div className="list">
                    <div>{text.usage.website}</div>
                    <div>{text.usage.app}</div>
                    <div>{text.usage.other}</div>
                </div>

                <div className="text">
                    {text.questions.split(" ").map((word: string, index: number) =>
                        word.includes("info@wergonic.com") ? (
                            <a href="mailto:info@wergonic.com" key={index}>
                                {word}
                            </a>
                        ) : (
                            <span key={index}>{word} </span>
                        )
                    )}
                </div>

                <div className="section-title">{text.summary.title}</div>
                <div className="text">{text.summary.intro}</div>
                <div className="list">
                    <div>{text.summary.personal_information}</div>
                    <div>{text.summary.sensitive_information}</div>
                    <div>{text.summary.third_party_info}</div>
                    <div>{text.summary.processing_info}</div>
                    <div>{text.summary.sharing_info}</div>
                    <div>{text.summary.security_info}</div>
                    <div>{text.summary.user_rights}</div>
                    <div>{text.summary.exercise_rights}</div>
                    <div>{text.summary.more_info}</div>
                </div>

                <div className="section-title">{text.table_of_contents.title}</div>
                <div className="toc-list">
                    {text.table_of_contents.items.map((item: string, index: number) => (
                        <div key={index}>
                            <a href={`#section-${index + 1}`}>{item}</a>
                        </div>
                    ))}
                </div>

                {Object.keys(text.sections).map((sectionKey: string, index: number) => (
                    <div id={`section-${index + 1}`} key={sectionKey}>
                        <div className="section-title">{text.sections[sectionKey].title}</div>
                        <div className="text">{text.sections[sectionKey].content}</div>

                        {text.sections[sectionKey].details &&
                            Object.keys(text.sections[sectionKey].details).map((detailKey) => (
                                <div key={detailKey} className="text">
                                    {Array.isArray(text.sections[sectionKey].details[detailKey])
                                        ? text.sections[sectionKey].details[detailKey].map(
                                              (item: string, idx: number) => <div key={idx}>- {item}</div>
                                          )
                                        : text.sections[sectionKey].details[detailKey]}
                                </div>
                            ))}
                    </div>
                ))}

                <div id="categories-table">
                    <div className="section-title">{text.categories_table.title}</div>
                    <div className="text">{text.categories_table.description}</div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>{text.categories_table.headers.category}</th>
                                <th>{text.categories_table.headers.examples}</th>
                                <th>{text.categories_table.headers.collected}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {text.categories_table.categories.map((category: any, index: number) => (
                                <tr key={index}>
                                    <td>{category.category}</td>
                                    <td>{category.examples}</td>
                                    <td>{category.collected}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="text">{text.post_table_content.additional_information}</div>
                <div className="list">
                    {text.post_table_content.additional_information_list.map((item: string, index: number) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>

                <div className="section-title">{text.post_table_content.information_use_share.title}</div>
                <div className="text">{text.post_table_content.information_use_share.content}</div>
                <div className="text">{text.post_table_content.information_use_share.contact_info}</div>
                <div className="text">{text.post_table_content.information_use_share.authorized_agent}</div>

                <div className="section-title">{text.post_table_content.info_sharing_with_others.title}</div>
                {text.post_table_content.info_sharing_with_others.content.map((paragraph: string, index: number) => (
                    <div key={index} className="text">
                        {paragraph}
                    </div>
                ))}

                <div className="section-title">{text.post_table_content.rights_with_respect_to_data.title}</div>
                <div className="text">{text.post_table_content.rights_with_respect_to_data.content}</div>
                <div className="text">{text.post_table_content.rights_with_respect_to_data.delete_right}</div>
                <div className="section-title">
                    {text.post_table_content.rights_with_respect_to_data.info_requests_right.title}
                </div>
                <div className="list">
                    {text.post_table_content.rights_with_respect_to_data.info_requests_right.details.map(
                        (item: string, index: number) => (
                            <div key={index}>- {item}</div>
                        )
                    )}
                </div>
                <div className="text">{text.post_table_content.rights_with_respect_to_data.non_discrimination}</div>

                <div className="section-title">{text.post_table_content.verification_process.title}</div>
                <div className="text">{text.post_table_content.verification_process.content}</div>

                <div className="section-title">{text.post_table_content.other_privacy_rights.title}</div>
                <div className="list">
                    {text.post_table_content.other_privacy_rights.list.map((item: string, index: number) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className="text">{text.post_table_content.other_privacy_rights.contact_info}</div>

                <div className="section-title">{text.post_table_content.update_policy.title}</div>
                <div className="text">{text.post_table_content.update_policy.content}</div>
                <div className="text">{text.post_table_content.update_policy.update_details}</div>

                <div className="section-title">{text.post_table_content.contact_information.title}</div>
                {text.post_table_content.contact_information.content.map((line: string, index: number) => (
                    <div key={index} className="text">
                        {line}
                    </div>
                ))}

                <div className="section-title">{text.post_table_content.review_rights.title}</div>
                <div className="text">{text.post_table_content.review_rights.content}</div>
            </div>
        </div>
    );
};
