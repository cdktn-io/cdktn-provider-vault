# `pkiSecretBackendExternalCaRole` Submodule <a name="`pkiSecretBackendExternalCaRole` Submodule" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendExternalCaRole <a name="PkiSecretBackendExternalCaRole" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role vault_pki_secret_backend_external_ca_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer"></a>

```python
from cdktn_provider_vault import pki_secret_backend_external_ca_role

pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acme_account_name: str,
  mount: str,
  name: str,
  allowed_challenge_types: typing.List[str] = None,
  allowed_domain_options: typing.List[str] = None,
  allowed_domains: typing.List[str] = None,
  csr_generate_key_type: str = None,
  csr_identifier_population: str = None,
  force: bool | IResolvable = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.acmeAccountName">acme_account_name</a></code> | <code>str</code> | The ACME account to use when validating certificates. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.mount">mount</a></code> | <code>str</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.allowedChallengeTypes">allowed_challenge_types</a></code> | <code>typing.List[str]</code> | The list of challenge types that are allowed to be used. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.allowedDomainOptions">allowed_domain_options</a></code> | <code>typing.List[str]</code> | A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.csrGenerateKeyType">csr_generate_key_type</a></code> | <code>str</code> | The key type and size/parameters to use when generating a new key if running in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.csrIdentifierPopulation">csr_identifier_population</a></code> | <code>str</code> | The technique used to populate a CSR from the provided identifiers in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | Force deletion even when active orders exist. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acme_account_name`<sup>Required</sup> <a name="acme_account_name" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.acmeAccountName"></a>

- *Type:* str

The ACME account to use when validating certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#acme_account_name PkiSecretBackendExternalCaRole#acme_account_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.mount"></a>

- *Type:* str

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#mount PkiSecretBackendExternalCaRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.name"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#name PkiSecretBackendExternalCaRole#name}

---

##### `allowed_challenge_types`<sup>Optional</sup> <a name="allowed_challenge_types" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.allowedChallengeTypes"></a>

- *Type:* typing.List[str]

The list of challenge types that are allowed to be used.

Valid values are: `http-01`, `dns-01`, `tls-alpn-01`. Defaults to all challenge types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_challenge_types PkiSecretBackendExternalCaRole#allowed_challenge_types}

---

##### `allowed_domain_options`<sup>Optional</sup> <a name="allowed_domain_options" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.allowedDomainOptions"></a>

- *Type:* typing.List[str]

A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client.

Valid values are: `bare_domains`, `subdomains`, `wildcards`, `globs`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_domain_options PkiSecretBackendExternalCaRole#allowed_domain_options}

---

##### `allowed_domains`<sup>Optional</sup> <a name="allowed_domains" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.allowedDomains"></a>

- *Type:* typing.List[str]

A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_domains PkiSecretBackendExternalCaRole#allowed_domains}

---

##### `csr_generate_key_type`<sup>Optional</sup> <a name="csr_generate_key_type" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.csrGenerateKeyType"></a>

- *Type:* str

The key type and size/parameters to use when generating a new key if running in the identifier workflow.

Valid values are: `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#csr_generate_key_type PkiSecretBackendExternalCaRole#csr_generate_key_type}

---

##### `csr_identifier_population`<sup>Optional</sup> <a name="csr_identifier_population" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.csrIdentifierPopulation"></a>

- *Type:* str

The technique used to populate a CSR from the provided identifiers in the identifier workflow.

Valid values are: `cn_first`, `sans_only`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#csr_identifier_population PkiSecretBackendExternalCaRole#csr_identifier_population}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.force"></a>

- *Type:* bool | cdktn.IResolvable

Force deletion even when active orders exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#force PkiSecretBackendExternalCaRole#force}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#namespace PkiSecretBackendExternalCaRole#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedChallengeTypes">reset_allowed_challenge_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedDomainOptions">reset_allowed_domain_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedDomains">reset_allowed_domains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetCsrGenerateKeyType">reset_csr_generate_key_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetCsrIdentifierPopulation">reset_csr_identifier_population</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetForce">reset_force</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_challenge_types` <a name="reset_allowed_challenge_types" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedChallengeTypes"></a>

```python
def reset_allowed_challenge_types() -> None
```

##### `reset_allowed_domain_options` <a name="reset_allowed_domain_options" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedDomainOptions"></a>

```python
def reset_allowed_domain_options() -> None
```

##### `reset_allowed_domains` <a name="reset_allowed_domains" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetAllowedDomains"></a>

```python
def reset_allowed_domains() -> None
```

##### `reset_csr_generate_key_type` <a name="reset_csr_generate_key_type" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetCsrGenerateKeyType"></a>

```python
def reset_csr_generate_key_type() -> None
```

##### `reset_csr_identifier_population` <a name="reset_csr_identifier_population" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetCsrIdentifierPopulation"></a>

```python
def reset_csr_identifier_population() -> None
```

##### `reset_force` <a name="reset_force" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetForce"></a>

```python
def reset_force() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PkiSecretBackendExternalCaRole resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isConstruct"></a>

```python
from cdktn_provider_vault import pki_secret_backend_external_ca_role

pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformElement"></a>

```python
from cdktn_provider_vault import pki_secret_backend_external_ca_role

pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformResource"></a>

```python
from cdktn_provider_vault import pki_secret_backend_external_ca_role

pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport"></a>

```python
from cdktn_provider_vault import pki_secret_backend_external_ca_role

pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PkiSecretBackendExternalCaRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendExternalCaRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendExternalCaRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendExternalCaRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.creationDate">creation_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.lastUpdateDate">last_update_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.acmeAccountNameInput">acme_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedChallengeTypesInput">allowed_challenge_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainOptionsInput">allowed_domain_options_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainsInput">allowed_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrGenerateKeyTypeInput">csr_generate_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrIdentifierPopulationInput">csr_identifier_population_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.forceInput">force_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.acmeAccountName">acme_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedChallengeTypes">allowed_challenge_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainOptions">allowed_domain_options</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrGenerateKeyType">csr_generate_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrIdentifierPopulation">csr_identifier_population</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_date`<sup>Required</sup> <a name="creation_date" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.creationDate"></a>

```python
creation_date: str
```

- *Type:* str

---

##### `last_update_date`<sup>Required</sup> <a name="last_update_date" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.lastUpdateDate"></a>

```python
last_update_date: str
```

- *Type:* str

---

##### `acme_account_name_input`<sup>Optional</sup> <a name="acme_account_name_input" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.acmeAccountNameInput"></a>

```python
acme_account_name_input: str
```

- *Type:* str

---

##### `allowed_challenge_types_input`<sup>Optional</sup> <a name="allowed_challenge_types_input" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedChallengeTypesInput"></a>

```python
allowed_challenge_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_domain_options_input`<sup>Optional</sup> <a name="allowed_domain_options_input" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainOptionsInput"></a>

```python
allowed_domain_options_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_domains_input`<sup>Optional</sup> <a name="allowed_domains_input" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainsInput"></a>

```python
allowed_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `csr_generate_key_type_input`<sup>Optional</sup> <a name="csr_generate_key_type_input" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrGenerateKeyTypeInput"></a>

```python
csr_generate_key_type_input: str
```

- *Type:* str

---

##### `csr_identifier_population_input`<sup>Optional</sup> <a name="csr_identifier_population_input" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrIdentifierPopulationInput"></a>

```python
csr_identifier_population_input: str
```

- *Type:* str

---

##### `force_input`<sup>Optional</sup> <a name="force_input" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.forceInput"></a>

```python
force_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `acme_account_name`<sup>Required</sup> <a name="acme_account_name" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.acmeAccountName"></a>

```python
acme_account_name: str
```

- *Type:* str

---

##### `allowed_challenge_types`<sup>Required</sup> <a name="allowed_challenge_types" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedChallengeTypes"></a>

```python
allowed_challenge_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_domain_options`<sup>Required</sup> <a name="allowed_domain_options" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomainOptions"></a>

```python
allowed_domain_options: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_domains`<sup>Required</sup> <a name="allowed_domains" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.allowedDomains"></a>

```python
allowed_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `csr_generate_key_type`<sup>Required</sup> <a name="csr_generate_key_type" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrGenerateKeyType"></a>

```python
csr_generate_key_type: str
```

- *Type:* str

---

##### `csr_identifier_population`<sup>Required</sup> <a name="csr_identifier_population" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.csrIdentifierPopulation"></a>

```python
csr_identifier_population: str
```

- *Type:* str

---

##### `force`<sup>Required</sup> <a name="force" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.force"></a>

```python
force: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendExternalCaRoleConfig <a name="PkiSecretBackendExternalCaRoleConfig" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.Initializer"></a>

```python
from cdktn_provider_vault import pki_secret_backend_external_ca_role

pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acme_account_name: str,
  mount: str,
  name: str,
  allowed_challenge_types: typing.List[str] = None,
  allowed_domain_options: typing.List[str] = None,
  allowed_domains: typing.List[str] = None,
  csr_generate_key_type: str = None,
  csr_identifier_population: str = None,
  force: bool | IResolvable = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.acmeAccountName">acme_account_name</a></code> | <code>str</code> | The ACME account to use when validating certificates. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.mount">mount</a></code> | <code>str</code> | The path where the PKI External CA secret backend is mounted. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.name">name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedChallengeTypes">allowed_challenge_types</a></code> | <code>typing.List[str]</code> | The list of challenge types that are allowed to be used. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedDomainOptions">allowed_domain_options</a></code> | <code>typing.List[str]</code> | A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.csrGenerateKeyType">csr_generate_key_type</a></code> | <code>str</code> | The key type and size/parameters to use when generating a new key if running in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.csrIdentifierPopulation">csr_identifier_population</a></code> | <code>str</code> | The technique used to populate a CSR from the provided identifiers in the identifier workflow. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.force">force</a></code> | <code>bool \| cdktn.IResolvable</code> | Force deletion even when active orders exist. |
| <code><a href="#@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `acme_account_name`<sup>Required</sup> <a name="acme_account_name" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.acmeAccountName"></a>

```python
acme_account_name: str
```

- *Type:* str

The ACME account to use when validating certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#acme_account_name PkiSecretBackendExternalCaRole#acme_account_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the PKI External CA secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#mount PkiSecretBackendExternalCaRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#name PkiSecretBackendExternalCaRole#name}

---

##### `allowed_challenge_types`<sup>Optional</sup> <a name="allowed_challenge_types" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedChallengeTypes"></a>

```python
allowed_challenge_types: typing.List[str]
```

- *Type:* typing.List[str]

The list of challenge types that are allowed to be used.

Valid values are: `http-01`, `dns-01`, `tls-alpn-01`. Defaults to all challenge types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_challenge_types PkiSecretBackendExternalCaRole#allowed_challenge_types}

---

##### `allowed_domain_options`<sup>Optional</sup> <a name="allowed_domain_options" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedDomainOptions"></a>

```python
allowed_domain_options: typing.List[str]
```

- *Type:* typing.List[str]

A list of keyword options that influence how values within allowed_domains are interpreted against the requested set of identifiers from the client.

Valid values are: `bare_domains`, `subdomains`, `wildcards`, `globs`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_domain_options PkiSecretBackendExternalCaRole#allowed_domain_options}

---

##### `allowed_domains`<sup>Optional</sup> <a name="allowed_domains" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.allowedDomains"></a>

```python
allowed_domains: typing.List[str]
```

- *Type:* typing.List[str]

A list of domains the role will accept certificates for. May contain templates, as with ACL Path Templating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#allowed_domains PkiSecretBackendExternalCaRole#allowed_domains}

---

##### `csr_generate_key_type`<sup>Optional</sup> <a name="csr_generate_key_type" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.csrGenerateKeyType"></a>

```python
csr_generate_key_type: str
```

- *Type:* str

The key type and size/parameters to use when generating a new key if running in the identifier workflow.

Valid values are: `ec-256`, `ec-384`, `ec-521`, `rsa-2048`, `rsa-4096`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#csr_generate_key_type PkiSecretBackendExternalCaRole#csr_generate_key_type}

---

##### `csr_identifier_population`<sup>Optional</sup> <a name="csr_identifier_population" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.csrIdentifierPopulation"></a>

```python
csr_identifier_population: str
```

- *Type:* str

The technique used to populate a CSR from the provided identifiers in the identifier workflow.

Valid values are: `cn_first`, `sans_only`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#csr_identifier_population PkiSecretBackendExternalCaRole#csr_identifier_population}

---

##### `force`<sup>Optional</sup> <a name="force" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.force"></a>

```python
force: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Force deletion even when active orders exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#force PkiSecretBackendExternalCaRole#force}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.pkiSecretBackendExternalCaRole.PkiSecretBackendExternalCaRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/pki_secret_backend_external_ca_role#namespace PkiSecretBackendExternalCaRole#namespace}

---



