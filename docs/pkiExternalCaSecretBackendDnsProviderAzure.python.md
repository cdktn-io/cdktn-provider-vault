# `pkiExternalCaSecretBackendDnsProviderAzure` Submodule <a name="`pkiExternalCaSecretBackendDnsProviderAzure` Submodule" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiExternalCaSecretBackendDnsProviderAzure <a name="PkiExternalCaSecretBackendDnsProviderAzure" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure vault_pki_external_ca_secret_backend_dns_provider_azure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_azure

pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure(
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
  client_id: str = None,
  client_secret_wo: str = None,
  client_secret_wo_version: typing.Union[int, float] = None,
  environment: str = None,
  nameserver: str = None,
  namespace: str = None,
  resource_group_name: str = None,
  subscription_id: str = None,
  tenant_id: str = None,
  ttl: typing.Union[int, float] = None,
  zone_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.mount">mount</a></code> | <code>str</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Azure service principal client ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Azure service principal client secret. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientSecretWoVersion">client_secret_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `client_secret` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.environment">environment</a></code> | <code>str</code> | Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.nameserver">nameserver</a></code> | <code>str</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Resource group containing the DNS zone. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Azure subscription ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Azure tenant ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.zoneName">zone_name</a></code> | <code>str</code> | Azure DNS zone name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.identifiers"></a>

- *Type:* typing.List[str]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#identifiers PkiExternalCaSecretBackendDnsProviderAzure#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.mount"></a>

- *Type:* str

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#mount PkiExternalCaSecretBackendDnsProviderAzure#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.name"></a>

- *Type:* str

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#name PkiExternalCaSecretBackendDnsProviderAzure#name}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientId"></a>

- *Type:* str

Azure service principal client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_id PkiExternalCaSecretBackendDnsProviderAzure#client_id}

---

##### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientSecretWo"></a>

- *Type:* str

Azure service principal client secret. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo}

---

##### `client_secret_wo_version`<sup>Optional</sup> <a name="client_secret_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.clientSecretWoVersion"></a>

- *Type:* typing.Union[int, float]

Version counter for the write-only `client_secret` field.

Increment this value to trigger an update to the client secret in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo_version PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo_version}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.environment"></a>

- *Type:* str

Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#environment PkiExternalCaSecretBackendDnsProviderAzure#environment}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.nameserver"></a>

- *Type:* str

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#nameserver PkiExternalCaSecretBackendDnsProviderAzure#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#namespace PkiExternalCaSecretBackendDnsProviderAzure#namespace}

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Resource group containing the DNS zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#resource_group_name PkiExternalCaSecretBackendDnsProviderAzure#resource_group_name}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Azure subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#subscription_id PkiExternalCaSecretBackendDnsProviderAzure#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.tenantId"></a>

- *Type:* str

Azure tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#tenant_id PkiExternalCaSecretBackendDnsProviderAzure#tenant_id}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#ttl PkiExternalCaSecretBackendDnsProviderAzure#ttl}

---

##### `zone_name`<sup>Optional</sup> <a name="zone_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.Initializer.parameter.zoneName"></a>

- *Type:* str

Azure DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#zone_name PkiExternalCaSecretBackendDnsProviderAzure#zone_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWo">reset_client_secret_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWoVersion">reset_client_secret_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNameserver">reset_nameserver</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetResourceGroupName">reset_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetZoneName">reset_zone_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret_wo` <a name="reset_client_secret_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWo"></a>

```python
def reset_client_secret_wo() -> None
```

##### `reset_client_secret_wo_version` <a name="reset_client_secret_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetClientSecretWoVersion"></a>

```python
def reset_client_secret_wo_version() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_nameserver` <a name="reset_nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNameserver"></a>

```python
def reset_nameserver() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_resource_group_name` <a name="reset_resource_group_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetResourceGroupName"></a>

```python
def reset_resource_group_name() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_zone_name` <a name="reset_zone_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.resetZoneName"></a>

```python
def reset_zone_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAzure resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_azure

pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_azure

pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_azure

pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_azure

pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PkiExternalCaSecretBackendDnsProviderAzure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiExternalCaSecretBackendDnsProviderAzure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiExternalCaSecretBackendDnsProviderAzure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiExternalCaSecretBackendDnsProviderAzure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoInput">client_secret_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersionInput">client_secret_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiersInput">identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserverInput">nameserver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneNameInput">zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersion">client_secret_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserver">nameserver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneName">zone_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_wo_input`<sup>Optional</sup> <a name="client_secret_wo_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoInput"></a>

```python
client_secret_wo_input: str
```

- *Type:* str

---

##### `client_secret_wo_version_input`<sup>Optional</sup> <a name="client_secret_wo_version_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersionInput"></a>

```python
client_secret_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `identifiers_input`<sup>Optional</sup> <a name="identifiers_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiersInput"></a>

```python
identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `nameserver_input`<sup>Optional</sup> <a name="nameserver_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserverInput"></a>

```python
nameserver_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_name_input`<sup>Optional</sup> <a name="zone_name_input" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneNameInput"></a>

```python
zone_name_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### ~~`client_secret_wo`~~<sup>Required</sup> <a name="client_secret_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
client_secret_wo: str
```

- *Type:* str

---

##### `client_secret_wo_version`<sup>Required</sup> <a name="client_secret_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.clientSecretWoVersion"></a>

```python
client_secret_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `nameserver`<sup>Required</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.nameserver"></a>

```python
nameserver: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_name`<sup>Required</sup> <a name="zone_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiExternalCaSecretBackendDnsProviderAzureConfig <a name="PkiExternalCaSecretBackendDnsProviderAzureConfig" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.Initializer"></a>

```python
from cdktn_provider_vault import pki_external_ca_secret_backend_dns_provider_azure

pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig(
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
  client_id: str = None,
  client_secret_wo: str = None,
  client_secret_wo_version: typing.Union[int, float] = None,
  environment: str = None,
  nameserver: str = None,
  namespace: str = None,
  resource_group_name: str = None,
  subscription_id: str = None,
  tenant_id: str = None,
  ttl: typing.Union[int, float] = None,
  zone_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.identifiers">identifiers</a></code> | <code>typing.List[str]</code> | List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.mount">mount</a></code> | <code>str</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.name">name</a></code> | <code>str</code> | Name of the DNS provider configuration. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientId">client_id</a></code> | <code>str</code> | Azure service principal client ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWo">client_secret_wo</a></code> | <code>str</code> | Azure service principal client secret. Write-only — not returned by Vault. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWoVersion">client_secret_wo_version</a></code> | <code>typing.Union[int, float]</code> | Version counter for the write-only `client_secret` field. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.environment">environment</a></code> | <code>str</code> | Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.nameserver">nameserver</a></code> | <code>str</code> | Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Resource group containing the DNS zone. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Azure subscription ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Azure tenant ID. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`. |
| <code><a href="#@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.zoneName">zone_name</a></code> | <code>str</code> | Azure DNS zone name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `identifiers`<sup>Required</sup> <a name="identifiers" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.identifiers"></a>

```python
identifiers: typing.List[str]
```

- *Type:* typing.List[str]

List of domain identifiers this provider handles. Supports wildcard patterns with leftmost `*` (e.g. `*.example.com`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#identifiers PkiExternalCaSecretBackendDnsProviderAzure#identifiers}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#mount PkiExternalCaSecretBackendDnsProviderAzure#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the DNS provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#name PkiExternalCaSecretBackendDnsProviderAzure#name}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Azure service principal client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_id PkiExternalCaSecretBackendDnsProviderAzure#client_id}

---

##### `client_secret_wo`<sup>Optional</sup> <a name="client_secret_wo" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWo"></a>

```python
client_secret_wo: str
```

- *Type:* str

Azure service principal client secret. Write-only — not returned by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo}

---

##### `client_secret_wo_version`<sup>Optional</sup> <a name="client_secret_wo_version" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.clientSecretWoVersion"></a>

```python
client_secret_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Version counter for the write-only `client_secret` field.

Increment this value to trigger an update to the client secret in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#client_secret_wo_version PkiExternalCaSecretBackendDnsProviderAzure#client_secret_wo_version}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

Azure cloud environment. Valid values: `AzurePublic`, `AzureChina`, `AzureGovernment`. Defaults to `AzurePublic`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#environment PkiExternalCaSecretBackendDnsProviderAzure#environment}

---

##### `nameserver`<sup>Optional</sup> <a name="nameserver" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.nameserver"></a>

```python
nameserver: str
```

- *Type:* str

Address of a DNS nameserver (`host` or `host:port`) to use when verifying DNS-01 challenge propagation instead of the domain's primary nameserver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#nameserver PkiExternalCaSecretBackendDnsProviderAzure#nameserver}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#namespace PkiExternalCaSecretBackendDnsProviderAzure#namespace}

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Resource group containing the DNS zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#resource_group_name PkiExternalCaSecretBackendDnsProviderAzure#resource_group_name}

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Azure subscription ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#subscription_id PkiExternalCaSecretBackendDnsProviderAzure#subscription_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Azure tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#tenant_id PkiExternalCaSecretBackendDnsProviderAzure#tenant_id}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

TTL for DNS TXT records used in DNS-01 challenges in seconds. Defaults to `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#ttl PkiExternalCaSecretBackendDnsProviderAzure#ttl}

---

##### `zone_name`<sup>Optional</sup> <a name="zone_name" id="@cdktn/provider-vault.pkiExternalCaSecretBackendDnsProviderAzure.PkiExternalCaSecretBackendDnsProviderAzureConfig.property.zoneName"></a>

```python
zone_name: str
```

- *Type:* str

Azure DNS zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/pki_external_ca_secret_backend_dns_provider_azure#zone_name PkiExternalCaSecretBackendDnsProviderAzure#zone_name}

---



