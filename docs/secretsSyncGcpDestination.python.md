# `secretsSyncGcpDestination` Submodule <a name="`secretsSyncGcpDestination` Submodule" id="@cdktn/provider-vault.secretsSyncGcpDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncGcpDestination <a name="SecretsSyncGcpDestination" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination vault_secrets_sync_gcp_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer"></a>

```python
from cdktn_provider_vault import secrets_sync_gcp_destination

secretsSyncGcpDestination.SecretsSyncGcpDestination(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  allowed_ipv4_addresses: typing.List[str] = None,
  allowed_ipv6_addresses: typing.List[str] = None,
  allowed_ports: typing.List[typing.Union[int, float]] = None,
  credentials: str = None,
  custom_tags: typing.Mapping[str] = None,
  disable_strict_networking: bool | IResolvable = None,
  global_kms_key: str = None,
  granularity: str = None,
  id: str = None,
  locational_kms_keys: typing.Mapping[str] = None,
  namespace: str = None,
  project_id: str = None,
  replication_locations: typing.List[str] = None,
  secret_name_template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name of the GCP destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedIpv4Addresses">allowed_ipv4_addresses</a></code> | <code>typing.List[str]</code> | Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedIpv6Addresses">allowed_ipv6_addresses</a></code> | <code>typing.List[str]</code> | Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedPorts">allowed_ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Allowed ports for outbound network connectivity. If not set, all ports are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.credentials">credentials</a></code> | <code>str</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.disableStrictNetworking">disable_strict_networking</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable strict networking requirements. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.globalKmsKey">global_kms_key</a></code> | <code>str</code> | Global KMS key for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.granularity">granularity</a></code> | <code>str</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.locationalKmsKeys">locational_kms_keys</a></code> | <code>typing.Mapping[str]</code> | Locational KMS keys for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | The target project to manage secrets in. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.replicationLocations">replication_locations</a></code> | <code>typing.List[str]</code> | Replication locations for secrets. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | Template describing how to generate external secret names. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.name"></a>

- *Type:* str

Unique name of the GCP destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#name SecretsSyncGcpDestination#name}

---

##### `allowed_ipv4_addresses`<sup>Optional</sup> <a name="allowed_ipv4_addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedIpv4Addresses"></a>

- *Type:* typing.List[str]

Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ipv4_addresses SecretsSyncGcpDestination#allowed_ipv4_addresses}

---

##### `allowed_ipv6_addresses`<sup>Optional</sup> <a name="allowed_ipv6_addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedIpv6Addresses"></a>

- *Type:* typing.List[str]

Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ipv6_addresses SecretsSyncGcpDestination#allowed_ipv6_addresses}

---

##### `allowed_ports`<sup>Optional</sup> <a name="allowed_ports" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.allowedPorts"></a>

- *Type:* typing.List[typing.Union[int, float]]

Allowed ports for outbound network connectivity. If not set, all ports are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ports SecretsSyncGcpDestination#allowed_ports}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.credentials"></a>

- *Type:* str

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#credentials SecretsSyncGcpDestination#credentials}

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.customTags"></a>

- *Type:* typing.Mapping[str]

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#custom_tags SecretsSyncGcpDestination#custom_tags}

---

##### `disable_strict_networking`<sup>Optional</sup> <a name="disable_strict_networking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.disableStrictNetworking"></a>

- *Type:* bool | cdktn.IResolvable

Disable strict networking requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#disable_strict_networking SecretsSyncGcpDestination#disable_strict_networking}

---

##### `global_kms_key`<sup>Optional</sup> <a name="global_kms_key" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.globalKmsKey"></a>

- *Type:* str

Global KMS key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#global_kms_key SecretsSyncGcpDestination#global_kms_key}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.granularity"></a>

- *Type:* str

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#granularity SecretsSyncGcpDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locational_kms_keys`<sup>Optional</sup> <a name="locational_kms_keys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.locationalKmsKeys"></a>

- *Type:* typing.Mapping[str]

Locational KMS keys for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#locational_kms_keys SecretsSyncGcpDestination#locational_kms_keys}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#namespace SecretsSyncGcpDestination#namespace}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.projectId"></a>

- *Type:* str

The target project to manage secrets in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#project_id SecretsSyncGcpDestination#project_id}

---

##### `replication_locations`<sup>Optional</sup> <a name="replication_locations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.replicationLocations"></a>

- *Type:* typing.List[str]

Replication locations for secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#replication_locations SecretsSyncGcpDestination#replication_locations}

---

##### `secret_name_template`<sup>Optional</sup> <a name="secret_name_template" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.Initializer.parameter.secretNameTemplate"></a>

- *Type:* str

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#secret_name_template SecretsSyncGcpDestination#secret_name_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv4Addresses">reset_allowed_ipv4_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv6Addresses">reset_allowed_ipv6_addresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedPorts">reset_allowed_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetDisableStrictNetworking">reset_disable_strict_networking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGlobalKmsKey">reset_global_kms_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGranularity">reset_granularity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetLocationalKmsKeys">reset_locational_kms_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetReplicationLocations">reset_replication_locations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetSecretNameTemplate">reset_secret_name_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_ipv4_addresses` <a name="reset_allowed_ipv4_addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv4Addresses"></a>

```python
def reset_allowed_ipv4_addresses() -> None
```

##### `reset_allowed_ipv6_addresses` <a name="reset_allowed_ipv6_addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedIpv6Addresses"></a>

```python
def reset_allowed_ipv6_addresses() -> None
```

##### `reset_allowed_ports` <a name="reset_allowed_ports" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetAllowedPorts"></a>

```python
def reset_allowed_ports() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_disable_strict_networking` <a name="reset_disable_strict_networking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetDisableStrictNetworking"></a>

```python
def reset_disable_strict_networking() -> None
```

##### `reset_global_kms_key` <a name="reset_global_kms_key" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGlobalKmsKey"></a>

```python
def reset_global_kms_key() -> None
```

##### `reset_granularity` <a name="reset_granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetGranularity"></a>

```python
def reset_granularity() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_locational_kms_keys` <a name="reset_locational_kms_keys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetLocationalKmsKeys"></a>

```python
def reset_locational_kms_keys() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_replication_locations` <a name="reset_replication_locations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetReplicationLocations"></a>

```python
def reset_replication_locations() -> None
```

##### `reset_secret_name_template` <a name="reset_secret_name_template" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.resetSecretNameTemplate"></a>

```python
def reset_secret_name_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SecretsSyncGcpDestination resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct"></a>

```python
from cdktn_provider_vault import secrets_sync_gcp_destination

secretsSyncGcpDestination.SecretsSyncGcpDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement"></a>

```python
from cdktn_provider_vault import secrets_sync_gcp_destination

secretsSyncGcpDestination.SecretsSyncGcpDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource"></a>

```python
from cdktn_provider_vault import secrets_sync_gcp_destination

secretsSyncGcpDestination.SecretsSyncGcpDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport"></a>

```python
from cdktn_provider_vault import secrets_sync_gcp_destination

secretsSyncGcpDestination.SecretsSyncGcpDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SecretsSyncGcpDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecretsSyncGcpDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecretsSyncGcpDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SecretsSyncGcpDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4AddressesInput">allowed_ipv4_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6AddressesInput">allowed_ipv6_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPortsInput">allowed_ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTagsInput">custom_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworkingInput">disable_strict_networking_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKeyInput">global_kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeysInput">locational_kms_keys_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocationsInput">replication_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplateInput">secret_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4Addresses">allowed_ipv4_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6Addresses">allowed_ipv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPorts">allowed_ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworking">disable_strict_networking</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKey">global_kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeys">locational_kms_keys</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocations">replication_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `allowed_ipv4_addresses_input`<sup>Optional</sup> <a name="allowed_ipv4_addresses_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4AddressesInput"></a>

```python
allowed_ipv4_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_ipv6_addresses_input`<sup>Optional</sup> <a name="allowed_ipv6_addresses_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6AddressesInput"></a>

```python
allowed_ipv6_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_ports_input`<sup>Optional</sup> <a name="allowed_ports_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPortsInput"></a>

```python
allowed_ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTagsInput"></a>

```python
custom_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disable_strict_networking_input`<sup>Optional</sup> <a name="disable_strict_networking_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworkingInput"></a>

```python
disable_strict_networking_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `global_kms_key_input`<sup>Optional</sup> <a name="global_kms_key_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKeyInput"></a>

```python
global_kms_key_input: str
```

- *Type:* str

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `locational_kms_keys_input`<sup>Optional</sup> <a name="locational_kms_keys_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeysInput"></a>

```python
locational_kms_keys_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `replication_locations_input`<sup>Optional</sup> <a name="replication_locations_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocationsInput"></a>

```python
replication_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_name_template_input`<sup>Optional</sup> <a name="secret_name_template_input" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplateInput"></a>

```python
secret_name_template_input: str
```

- *Type:* str

---

##### `allowed_ipv4_addresses`<sup>Required</sup> <a name="allowed_ipv4_addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv4Addresses"></a>

```python
allowed_ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_ipv6_addresses`<sup>Required</sup> <a name="allowed_ipv6_addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedIpv6Addresses"></a>

```python
allowed_ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_ports`<sup>Required</sup> <a name="allowed_ports" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.allowedPorts"></a>

```python
allowed_ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `disable_strict_networking`<sup>Required</sup> <a name="disable_strict_networking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.disableStrictNetworking"></a>

```python
disable_strict_networking: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `global_kms_key`<sup>Required</sup> <a name="global_kms_key" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.globalKmsKey"></a>

```python
global_kms_key: str
```

- *Type:* str

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `locational_kms_keys`<sup>Required</sup> <a name="locational_kms_keys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.locationalKmsKeys"></a>

```python
locational_kms_keys: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `replication_locations`<sup>Required</sup> <a name="replication_locations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.replicationLocations"></a>

```python
replication_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_name_template`<sup>Required</sup> <a name="secret_name_template" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.secretNameTemplate"></a>

```python
secret_name_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncGcpDestinationConfig <a name="SecretsSyncGcpDestinationConfig" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.Initializer"></a>

```python
from cdktn_provider_vault import secrets_sync_gcp_destination

secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  allowed_ipv4_addresses: typing.List[str] = None,
  allowed_ipv6_addresses: typing.List[str] = None,
  allowed_ports: typing.List[typing.Union[int, float]] = None,
  credentials: str = None,
  custom_tags: typing.Mapping[str] = None,
  disable_strict_networking: bool | IResolvable = None,
  global_kms_key: str = None,
  granularity: str = None,
  id: str = None,
  locational_kms_keys: typing.Mapping[str] = None,
  namespace: str = None,
  project_id: str = None,
  replication_locations: typing.List[str] = None,
  secret_name_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.name">name</a></code> | <code>str</code> | Unique name of the GCP destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv4Addresses">allowed_ipv4_addresses</a></code> | <code>typing.List[str]</code> | Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv6Addresses">allowed_ipv6_addresses</a></code> | <code>typing.List[str]</code> | Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedPorts">allowed_ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Allowed ports for outbound network connectivity. If not set, all ports are allowed. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.credentials">credentials</a></code> | <code>str</code> | JSON-encoded credentials to use to connect to GCP. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.disableStrictNetworking">disable_strict_networking</a></code> | <code>bool \| cdktn.IResolvable</code> | Disable strict networking requirements. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.globalKmsKey">global_kms_key</a></code> | <code>str</code> | Global KMS key for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.granularity">granularity</a></code> | <code>str</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.locationalKmsKeys">locational_kms_keys</a></code> | <code>typing.Mapping[str]</code> | Locational KMS keys for encryption. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.projectId">project_id</a></code> | <code>str</code> | The target project to manage secrets in. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.replicationLocations">replication_locations</a></code> | <code>typing.List[str]</code> | Replication locations for secrets. |
| <code><a href="#@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | Template describing how to generate external secret names. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name of the GCP destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#name SecretsSyncGcpDestination#name}

---

##### `allowed_ipv4_addresses`<sup>Optional</sup> <a name="allowed_ipv4_addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv4Addresses"></a>

```python
allowed_ipv4_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Allowed IPv4 addresses for outbound network connectivity in CIDR notation. If not set, all IPv4 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ipv4_addresses SecretsSyncGcpDestination#allowed_ipv4_addresses}

---

##### `allowed_ipv6_addresses`<sup>Optional</sup> <a name="allowed_ipv6_addresses" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedIpv6Addresses"></a>

```python
allowed_ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Allowed IPv6 addresses for outbound network connectivity in CIDR notation. If not set, all IPv6 addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ipv6_addresses SecretsSyncGcpDestination#allowed_ipv6_addresses}

---

##### `allowed_ports`<sup>Optional</sup> <a name="allowed_ports" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.allowedPorts"></a>

```python
allowed_ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Allowed ports for outbound network connectivity. If not set, all ports are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#allowed_ports SecretsSyncGcpDestination#allowed_ports}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

JSON-encoded credentials to use to connect to GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#credentials SecretsSyncGcpDestination#credentials}

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#custom_tags SecretsSyncGcpDestination#custom_tags}

---

##### `disable_strict_networking`<sup>Optional</sup> <a name="disable_strict_networking" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.disableStrictNetworking"></a>

```python
disable_strict_networking: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Disable strict networking requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#disable_strict_networking SecretsSyncGcpDestination#disable_strict_networking}

---

##### `global_kms_key`<sup>Optional</sup> <a name="global_kms_key" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.globalKmsKey"></a>

```python
global_kms_key: str
```

- *Type:* str

Global KMS key for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#global_kms_key SecretsSyncGcpDestination#global_kms_key}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#granularity SecretsSyncGcpDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#id SecretsSyncGcpDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locational_kms_keys`<sup>Optional</sup> <a name="locational_kms_keys" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.locationalKmsKeys"></a>

```python
locational_kms_keys: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Locational KMS keys for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#locational_kms_keys SecretsSyncGcpDestination#locational_kms_keys}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#namespace SecretsSyncGcpDestination#namespace}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The target project to manage secrets in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#project_id SecretsSyncGcpDestination#project_id}

---

##### `replication_locations`<sup>Optional</sup> <a name="replication_locations" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.replicationLocations"></a>

```python
replication_locations: typing.List[str]
```

- *Type:* typing.List[str]

Replication locations for secrets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#replication_locations SecretsSyncGcpDestination#replication_locations}

---

##### `secret_name_template`<sup>Optional</sup> <a name="secret_name_template" id="@cdktn/provider-vault.secretsSyncGcpDestination.SecretsSyncGcpDestinationConfig.property.secretNameTemplate"></a>

```python
secret_name_template: str
```

- *Type:* str

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/secrets_sync_gcp_destination#secret_name_template SecretsSyncGcpDestination#secret_name_template}

---



