'use client';
import PropTypes from 'prop-types';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import MotionWrapper from '@/components/MotionWrapper';
import Typeset from '@/components/Typeset';

import useTranslation from '@/hooks/useTranslation';

import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  PROJECT - HEADER  ***************************/

export default function ProjectHeader({ titleKey, subtitleKey }) {
  const { t } = useTranslation();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <MotionWrapper>
        <Typeset
          heading={t(titleKey)}
          caption={subtitleKey ? t(subtitleKey) : undefined}
          stackProps={{ sx: { textAlign: 'center', alignItems: 'center' } }}
          headingProps={{ variant: 'h1' }}
        />
      </MotionWrapper>
    </ContainerWrapper>
  );
}

ProjectHeader.propTypes = {
  titleKey: PropTypes.string.isRequired,
  subtitleKey: PropTypes.string
};
