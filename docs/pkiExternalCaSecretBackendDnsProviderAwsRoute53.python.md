# `pkiExternalCaSecretBackendDnsProviderAwsRoute53` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderAwsRoute53` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderAwsRoute53 <a name="PkiExternalCaSecretBackendDnsProviderAwsRoute53" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53 vault_pki_external_ca_secret_backend_dns_provider_aws_route53}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_aws_route53

pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identifiers: typing.List[str],
  mount: str,
  name: str,
  access_key_id: str = None,
  assume_role_arn: str = None,
  external_id: str = None,
  hosted_zone_id: str = None,
  nameserver: str = None,
  namespace: str = None,
  region: str = None,
  secret_access_key_wo: str = None,
  secret_access_key_wo_version: typing.Union[int, float] = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.mount">mount</a></code> | <code>str</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.accessKeyId">access_key_id</a></code> | <code>str</code> | AWS access key ID for Route53 API access. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.assumeRoleArn">assume_role_arn</a></code> | <code>str</code> | AWS IAM role ARN to assume for Route53 operations. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | External ID for AWS STS AssumeRole. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | AWS Route53 hosted zone ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.nameserver">nameserver</a></code> | <code>str</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.region">region</a></code> | <code>str</code> | AWS region for Route53 operations. Defaults to `us-east-1`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.secretAccessKeyWo">secret_access_key_wo</a></code> | <code>str</code> | AWS secret access key for Route53 API access. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.secretAccessKeyWoVersion">secret_access_key_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `secret_access_key` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.identifiers"></a>

- *Type:* typing.List[str]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#identifiers PkiExternalCaSecretBackendDnsProviderAwsRoute53#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.mount"></a>

- *Type:* str

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#mount PkiExternalCaSecretBackendDnsProviderAwsRoute53#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.name"></a>

- *Type:* str

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#name PkiExternalCaSecretBackendDnsProviderAwsRoute53#name}

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.accessKeyId"></a>

- *Type:* str

AWS access key ID for Route53 API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#access_key_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#access_key_id}

---

##### `assume_role_arn`<sup>Optional</sup> <a name="assume_role_arn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.assumeRoleArn"></a>

- *Type:* str

AWS IAM role ARN to assume for Route53 operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#assume_role_arn PkiExternalCaSecretBackendDnsProviderAwsRoute53#assume_role_arn}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.externalId"></a>

- *Type:* str

External ID for AWS STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#external_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#external_id}

---

##### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.hostedZoneId"></a>

- *Type:* str

AWS Route53 hosted zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#hosted_zone_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#hosted_zone_id}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.nameserver"></a>

- *Type:* str

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#nameserver PkiExternalCaSecretBackendDnsProviderAwsRoute53#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#namespace PkiExternalCaSecretBackendDnsProviderAwsRoute53#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.region"></a>

- *Type:* str

AWS region for Route53 operations. Defaults to `us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#region PkiExternalCaSecretBackendDnsProviderAwsRoute53#region}

---

##### `secret_access_key_wo`<sup>Optional</sup> <a name="secret_access_key_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.secretAccessKeyWo"></a>

- *Type:* str

AWS secret access key for Route53 API access. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo}

---

##### `secret_access_key_wo_version`<sup>Optional</sup> <a name="secret_access_key_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.secretAccessKeyWoVersion"></a>

- *Type:* typing.Union[int, float]

Version counter for the write-only `secret_access_key` field.

Increment this value to trigger an update to the secret access key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo_version PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo_version}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#ttl PkiExternalCaSecretBackendDnsProviderAwsRoute53#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAccessKeyId">reset_access_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAssumeRoleArn">reset_assume_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetHostedZoneId">reset_hosted_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNameserver">reset_nameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWo">reset_secret_access_key_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWoVersion">reset_secret_access_key_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_access_key_id` <a name="reset_access_key_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAccessKeyId"></a>

```python
def reset_access_key_id() -> None
```

##### `reset_assume_role_arn` <a name="reset_assume_role_arn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetAssumeRoleArn"></a>

```python
def reset_assume_role_arn() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_hosted_zone_id` <a name="reset_hosted_zone_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetHostedZoneId"></a>

```python
def reset_hosted_zone_id() -> None
```

##### `reset_nameserver` <a name="reset_nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNameserver"></a>

```python
def reset_nameserver() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_access_key_wo` <a name="reset_secret_access_key_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWo"></a>

```python
def reset_secret_access_key_wo() -> None
```

##### `reset_secret_access_key_wo_version` <a name="reset_secret_access_key_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetSecretAccessKeyWoVersion"></a>

```python
def reset_secret_access_key_wo_version() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_aws_route53

pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_aws_route53

pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_aws_route53

pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_aws_route53

pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAwsRoute53 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiExternalCaSecretBackendDnsProviderAwsRoute53 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAwsRoute53 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArnInput">assume_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneIdInput">hosted_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiersInput">identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserverInput">nameserver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoInput">secret_access_key_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersionInput">secret_access_key_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArn">assume_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserver">nameserver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWo">secret_access_key_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersion">secret_access_key_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `assume_role_arn_input`<sup>Optional</sup> <a name="assume_role_arn_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArnInput"></a>

```python
assume_role_arn_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `hosted_zone_id_input`<sup>Optional</sup> <a name="hosted_zone_id_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneIdInput"></a>

```python
hosted_zone_id_input: str
```

- *Type:* str

---

##### `identifiers_input`<sup>Optional</sup> <a name="identifiers_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiersInput"></a>

```python
identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nameserver_input`<sup>Optional</sup> <a name="nameserver_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserverInput"></a>

```python
nameserver_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_access_key_wo_input`<sup>Optional</sup> <a name="secret_access_key_wo_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoInput"></a>

```python
secret_access_key_wo_input: str
```

- *Type:* str

---

##### `secret_access_key_wo_version_input`<sup>Optional</sup> <a name="secret_access_key_wo_version_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersionInput"></a>

```python
secret_access_key_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `assume_role_arn`<sup>Required</sup> <a name="assume_role_arn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.assumeRoleArn"></a>

```python
assume_role_arn: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.nameserver"></a>

```python
nameserver: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### ~~`secret_access_key_wo`~~<sup>Required</sup> <a name="secret_access_key_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
secret_access_key_wo: str
```

- *Type:* str

---

##### `secret_access_key_wo_version`<sup>Required</sup> <a name="secret_access_key_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.secretAccessKeyWoVersion"></a>

```python
secret_access_key_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderAwsRoute53Config <a name="PkiExternalCaSecretBackendDnsProviderAwsRoute53Config" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.Initializer"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_aws_route53

pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  identifiers: typing.List[str],
  mount: str,
  name: str,
  access_key_id: str = None,
  assume_role_arn: str = None,
  external_id: str = None,
  hosted_zone_id: str = None,
  nameserver: str = None,
  namespace: str = None,
  region: str = None,
  secret_access_key_wo: str = None,
  secret_access_key_wo_version: typing.Union[int, float] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.mount">mount</a></code> | <code>str</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.name">name</a></code> | <code>str</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.accessKeyId">access_key_id</a></code> | <code>str</code> | AWS access key ID for Route53 API access. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.assumeRoleArn">assume_role_arn</a></code> | <code>str</code> | AWS IAM role ARN to assume for Route53 operations. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.externalId">external_id</a></code> | <code>str</code> | External ID for AWS STS AssumeRole. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | AWS Route53 hosted zone ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.nameserver">nameserver</a></code> | <code>str</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.region">region</a></code> | <code>str</code> | AWS region for Route53 operations. Defaults to `us-east-1`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWo">secret_access_key_wo</a></code> | <code>str</code> | AWS secret access key for Route53 API access. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWoVersion">secret_access_key_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `secret_access_key` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#identifiers PkiExternalCaSecretBackendDnsProviderAwsRoute53#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#mount PkiExternalCaSecretBackendDnsProviderAwsRoute53#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#name PkiExternalCaSecretBackendDnsProviderAwsRoute53#name}

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

AWS access key ID for Route53 API access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#access_key_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#access_key_id}

---

##### `assume_role_arn`<sup>Optional</sup> <a name="assume_role_arn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.assumeRoleArn"></a>

```python
assume_role_arn: str
```

- *Type:* str

AWS IAM role ARN to assume for Route53 operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#assume_role_arn PkiExternalCaSecretBackendDnsProviderAwsRoute53#assume_role_arn}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

External ID for AWS STS AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#external_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#external_id}

---

##### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

AWS Route53 hosted zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#hosted_zone_id PkiExternalCaSecretBackendDnsProviderAwsRoute53#hosted_zone_id}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.nameserver"></a>

```python
nameserver: str
```

- *Type:* str

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#nameserver PkiExternalCaSecretBackendDnsProviderAwsRoute53#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#namespace PkiExternalCaSecretBackendDnsProviderAwsRoute53#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.region"></a>

```python
region: str
```

- *Type:* str

AWS region for Route53 operations. Defaults to `us-east-1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#region PkiExternalCaSecretBackendDnsProviderAwsRoute53#region}

---

##### `secret_access_key_wo`<sup>Optional</sup> <a name="secret_access_key_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWo"></a>

```python
secret_access_key_wo: str
```

- *Type:* str

AWS secret access key for Route53 API access. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo}

---

##### `secret_access_key_wo_version`<sup>Optional</sup> <a name="secret_access_key_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.secretAccessKeyWoVersion"></a>

```python
secret_access_key_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version counter for the write-only `secret_access_key` field.

Increment this value to trigger an update to the secret access key in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#secret_access_key_wo_version PkiExternalCaSecretBackendDnsProviderAwsRoute53#secret_access_key_wo_version}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAwsRoute53.PkiExternalCaSecretBackendDnsProviderAwsRoute53Config.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_aws_route53#ttl PkiExternalCaSecretBackendDnsProviderAwsRoute53#ttl}

---



