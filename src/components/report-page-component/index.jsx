// ------------------------------ External Imports ------------------------------
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Card, DatePicker, Form } from 'antd';

// ------------------------------ Internal Imports ------------------------------
import { ArrowBack, Loading } from '../../tools';
import { StatisticsService } from '../../services/statistics.service';
import { CenteredWrapper, Container, Wrapper } from '../../tools/styles';

const { REACT_APP_BASE_URL } = process.env;

const { RangePicker } = DatePicker;

const ReportPageComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { priceInfo, dateInfo } = useSelector((state) => state.parameter);

  const [loading, setLoading] = useState(false);

  /* ------------------- Get Statistics ------------------- */
  const { isLoading, data } = useQuery('statistics', () =>
    StatisticsService.getStatistics()
  );

  /* ------------------- Parameter Submit ------------------- */
  const onParameterSubmit = async (e) => {
    setLoading(true);
    const rangeStart = new Date(e.date[0].$d).getTime();
    const rangeEnd = new Date(e.date[1].$d).getTime();

    fetch(
      `${REACT_APP_BASE_URL}/report?rangeStart=${rangeStart}&rangeEnd=${rangeEnd}&priceInfo=${priceInfo}&dateInfo=${dateInfo}`
    )
      .then((res) => res.blob())
      .then((res) => {
        const data = new Blob([res], { type: 'plain/text' });
        const xlsxURL = window.URL.createObjectURL(data);
        const tempLink = document.createElement('a');
        tempLink.href = xlsxURL;
        tempLink.setAttribute('download', 'filename.xlsx');
        tempLink.click();
        setLoading(false);
      });
  };

  return (
    <Container>
      <Wrapper>
        <CenteredWrapper>
          <ArrowBack translation={t('home_page.report_title')} />

          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Card>
                <Form
                  onFinish={onParameterSubmit}
                  labelCol={{
                    span: 7,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                >
                  <Form.Item
                    name="date"
                    label={t('reports_page.date_range')}
                    rules={[
                      {
                        required: true,
                        message: t('reports_page.date_range_fill_all_fields'),
                      },
                    ]}
                  >
                    <RangePicker
                      disabled={loading ? true : false}
                      onChange={(e) =>
                        console.log(
                          new Date(e[0].$d).getTime(),
                          new Date(e[1].$d).getTime()
                        )
                      }
                    />
                  </Form.Item>

                  <Form.Item label={t('reports_page.parameters')}>
                    <Button
                      disabled={loading ? true : false}
                      type="primary"
                      //   onClick={() => dispatch(setParameterModalVisibility())}
                    >
                      Parameter tanlash
                    </Button>
                  </Form.Item>
                  <Form.Item
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading ? true : false}
                    >
                      {t('reports_page.download')}
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </>
          )}
        </CenteredWrapper>
      </Wrapper>
    </Container>
  );
};

export default ReportPageComponent;
