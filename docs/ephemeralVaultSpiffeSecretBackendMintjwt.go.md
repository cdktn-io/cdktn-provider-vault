# `ephemeralVaultSpiffeSecretBackendMintjwt` Submodule <a name="`ephemeralVaultSpiffeSecretBackendMintjwt` Submodule" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultSpiffeSecretBackendMintjwt <a name="EphemeralVaultSpiffeSecretBackendMintjwt" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/spiffe_secret_backend_mintjwt vault_spiffe_secret_backend_mintjwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultspiffesecretbackendmintjwt"

ephemeralvaultspiffesecretbackendmintjwt.NewEphemeralVaultSpiffeSecretBackendMintjwt(scope Construct, id *string, config EphemeralVaultSpiffeSecretBackendMintjwtConfig) EphemeralVaultSpiffeSecretBackendMintjwt
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig">EphemeralVaultSpiffeSecretBackendMintjwtConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig">EphemeralVaultSpiffeSecretBackendMintjwtConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetMountId"></a>

```go
func ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultspiffesecretbackendmintjwt"

ephemeralvaultspiffesecretbackendmintjwt.EphemeralVaultSpiffeSecretBackendMintjwt_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultspiffesecretbackendmintjwt"

ephemeralvaultspiffesecretbackendmintjwt.EphemeralVaultSpiffeSecretBackendMintjwt_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultspiffesecretbackendmintjwt"

ephemeralvaultspiffesecretbackendmintjwt.EphemeralVaultSpiffeSecretBackendMintjwt_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audienceInput">AudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountIdInput">MountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audienceInput"></a>

```go
func AudienceInput() *string
```

- *Type:* *string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountIdInput"></a>

```go
func MountIdInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwt.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultSpiffeSecretBackendMintjwtConfig <a name="EphemeralVaultSpiffeSecretBackendMintjwtConfig" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v18/ephemeralvaultspiffesecretbackendmintjwt"

&ephemeralvaultspiffesecretbackendmintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Audience: *string,
	Mount: *string,
	Name: *string,
	MountId: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.audience">Audience</a></code> | <code>*string</code> | The audience claim to use. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mount">Mount</a></code> | <code>*string</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.name">Name</a></code> | <code>*string</code> | Name of the SPIFFE role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mountId">MountId</a></code> | <code>*string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.audience"></a>

```go
Audience *string
```

- *Type:* *string

The audience claim to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#audience EphemeralVaultSpiffeSecretBackendMintjwt#audience}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount EphemeralVaultSpiffeSecretBackendMintjwt#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the SPIFFE role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#name EphemeralVaultSpiffeSecretBackendMintjwt#name}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.mountId"></a>

```go
MountId *string
```

- *Type:* *string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#mount_id EphemeralVaultSpiffeSecretBackendMintjwt#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultSpiffeSecretBackendMintjwt.EphemeralVaultSpiffeSecretBackendMintjwtConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/spiffe_secret_backend_mintjwt#namespace EphemeralVaultSpiffeSecretBackendMintjwt#namespace}

---



