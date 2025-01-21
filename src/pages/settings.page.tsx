import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import SectionTitle from "./components/section-title.component";
import { useCategories } from "./hooks/use-categories.hook";
import { useSources } from "./hooks/use-sources.hook";
import { useAuthors } from "./hooks/use-authors.hook";
import { usePreference } from "./hooks/use-preference.hook";
import LoaderComponent from "./components/loader.component";
import ErrorComponent from "./components/error.component";
import PreferenceSelect from "./components/preference-select.component";
import { useSavePreference } from "./hooks/use-save-preference.hook";

const SettingsPage: React.FC = () => {
  const [categoryIds, setCategoryIds] = useState<number[]>([]);
  const [authorIds, setAuthorIds] = useState<number[]>([]);
  const [sourceIds, setSourceIds] = useState<number[]>([]);

  const { mutate: savePreference, isPending } = useSavePreference();

  const {
    data: categories,
    isLoading: loadingCategories,
    isError: categoriesError,
  } = useCategories();
  const {
    data: sources,
    isLoading: loadingSources,
    isError: sourcesError,
  } = useSources();
  const {
    data: authors,
    isLoading: loadingAuthors,
    isError: authorsError,
  } = useAuthors();
  const {
    data: preference,
    isLoading: loadingPreference,
    isError: preferenceError,
  } = usePreference();

  useEffect(() => {
    if (!preference) {
      return;
    }

    setCategoryIds(preference.category_ids);
    setAuthorIds(preference.author_ids);
    setSourceIds(preference.source_ids);
  }, [preference]);

  const loading =
    loadingCategories || loadingAuthors || loadingSources || loadingPreference;
  const error =
    categoriesError || authorsError || sourcesError || preferenceError;

  if (loading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <Box display="flex" flexDirection="column" gap="20px">
      <SectionTitle title="Feed Settings" />
      <Box
        display="flex"
        flexDirection="column"
        gap="30px"
        sx={{ width: "100%", backgroundColor: "#F5F5F5", p: "12px" }}
      >
        <PreferenceSelect
          label="Categories"
          entities={categories as any[]}
          values={categoryIds}
          onValuesChange={setCategoryIds}
        />
        <PreferenceSelect
          label="Sources"
          entities={sources as any[]}
          values={sourceIds}
          onValuesChange={setSourceIds}
        />
        <PreferenceSelect
          label="Authors"
          entities={authors as any[]}
          values={authorIds}
          onValuesChange={setAuthorIds}
        />

        <Box>
          <Button
            variant="contained"
            disabled={isPending}
            onClick={() =>
              savePreference({
                category_ids: categoryIds,
                author_ids: authorIds,
                source_ids: sourceIds,
              })
            }
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPage;
