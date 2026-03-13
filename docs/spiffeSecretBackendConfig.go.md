# `spiffeSecretBackendConfig` Submodule <a name="`spiffeSecretBackendConfig` Submodule" id="@cdktn/provider-vault.spiffeSecretBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeSecretBackendConfig <a name="SpiffeSecretBackendConfig" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config vault_spiffe_secret_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/spiffesecretbackendconfig"

spiffesecretbackendconfig.NewSpiffeSecretBackendConfig(scope Construct, id *string, config SpiffeSecretBackendConfigConfig) SpiffeSecretBackendConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig">SpiffeSecretBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig">SpiffeSecretBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetBundleRefreshHint">ResetBundleRefreshHint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtIssuerUrl">ResetJwtIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtOidcCompatibilityMode">ResetJwtOidcCompatibilityMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtSigningAlgorithm">ResetJwtSigningAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetKeyLifetime">ResetKeyLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBundleRefreshHint` <a name="ResetBundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetBundleRefreshHint"></a>

```go
func ResetBundleRefreshHint()
```

##### `ResetJwtIssuerUrl` <a name="ResetJwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtIssuerUrl"></a>

```go
func ResetJwtIssuerUrl()
```

##### `ResetJwtOidcCompatibilityMode` <a name="ResetJwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtOidcCompatibilityMode"></a>

```go
func ResetJwtOidcCompatibilityMode()
```

##### `ResetJwtSigningAlgorithm` <a name="ResetJwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetJwtSigningAlgorithm"></a>

```go
func ResetJwtSigningAlgorithm()
```

##### `ResetKeyLifetime` <a name="ResetKeyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetKeyLifetime"></a>

```go
func ResetKeyLifetime()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/spiffesecretbackendconfig"

spiffesecretbackendconfig.SpiffeSecretBackendConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/spiffesecretbackendconfig"

spiffesecretbackendconfig.SpiffeSecretBackendConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/spiffesecretbackendconfig"

spiffesecretbackendconfig.SpiffeSecretBackendConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/spiffesecretbackendconfig"

spiffesecretbackendconfig.SpiffeSecretBackendConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SpiffeSecretBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SpiffeSecretBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SpiffeSecretBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SpiffeSecretBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHintInput">BundleRefreshHintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrlInput">JwtIssuerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityModeInput">JwtOidcCompatibilityModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithmInput">JwtSigningAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetimeInput">KeyLifetimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomainInput">TrustDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHint">BundleRefreshHint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrl">JwtIssuerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityMode">JwtOidcCompatibilityMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithm">JwtSigningAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetime">KeyLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomain">TrustDomain</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BundleRefreshHintInput`<sup>Optional</sup> <a name="BundleRefreshHintInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHintInput"></a>

```go
func BundleRefreshHintInput() *string
```

- *Type:* *string

---

##### `JwtIssuerUrlInput`<sup>Optional</sup> <a name="JwtIssuerUrlInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrlInput"></a>

```go
func JwtIssuerUrlInput() *string
```

- *Type:* *string

---

##### `JwtOidcCompatibilityModeInput`<sup>Optional</sup> <a name="JwtOidcCompatibilityModeInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityModeInput"></a>

```go
func JwtOidcCompatibilityModeInput() interface{}
```

- *Type:* interface{}

---

##### `JwtSigningAlgorithmInput`<sup>Optional</sup> <a name="JwtSigningAlgorithmInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithmInput"></a>

```go
func JwtSigningAlgorithmInput() *string
```

- *Type:* *string

---

##### `KeyLifetimeInput`<sup>Optional</sup> <a name="KeyLifetimeInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetimeInput"></a>

```go
func KeyLifetimeInput() *string
```

- *Type:* *string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TrustDomainInput`<sup>Optional</sup> <a name="TrustDomainInput" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomainInput"></a>

```go
func TrustDomainInput() *string
```

- *Type:* *string

---

##### `BundleRefreshHint`<sup>Required</sup> <a name="BundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.bundleRefreshHint"></a>

```go
func BundleRefreshHint() *string
```

- *Type:* *string

---

##### `JwtIssuerUrl`<sup>Required</sup> <a name="JwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtIssuerUrl"></a>

```go
func JwtIssuerUrl() *string
```

- *Type:* *string

---

##### `JwtOidcCompatibilityMode`<sup>Required</sup> <a name="JwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtOidcCompatibilityMode"></a>

```go
func JwtOidcCompatibilityMode() interface{}
```

- *Type:* interface{}

---

##### `JwtSigningAlgorithm`<sup>Required</sup> <a name="JwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.jwtSigningAlgorithm"></a>

```go
func JwtSigningAlgorithm() *string
```

- *Type:* *string

---

##### `KeyLifetime`<sup>Required</sup> <a name="KeyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.keyLifetime"></a>

```go
func KeyLifetime() *string
```

- *Type:* *string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.trustDomain"></a>

```go
func TrustDomain() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeSecretBackendConfigConfig <a name="SpiffeSecretBackendConfigConfig" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/spiffesecretbackendconfig"

&spiffesecretbackendconfig.SpiffeSecretBackendConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	TrustDomain: *string,
	BundleRefreshHint: *string,
	JwtIssuerUrl: *string,
	JwtOidcCompatibilityMode: interface{},
	JwtSigningAlgorithm: *string,
	KeyLifetime: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.mount">Mount</a></code> | <code>*string</code> | Mount path for the SPIFFE secrets engine in Vault. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.trustDomain">TrustDomain</a></code> | <code>*string</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.bundleRefreshHint">BundleRefreshHint</a></code> | <code>*string</code> | Refresh hint to use in trust bundles. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtIssuerUrl">JwtIssuerUrl</a></code> | <code>*string</code> | Base URL to use for JWT iss claim. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtOidcCompatibilityMode">JwtOidcCompatibilityMode</a></code> | <code>interface{}</code> | If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtSigningAlgorithm">JwtSigningAlgorithm</a></code> | <code>*string</code> | Signing algorithm to use for JWTs. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.keyLifetime">KeyLifetime</a></code> | <code>*string</code> | How long a signing key will live for once it starts being used to sign. |
| <code><a href="#@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Mount path for the SPIFFE secrets engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#mount SpiffeSecretBackendConfig#mount}

---

##### `TrustDomain`<sup>Required</sup> <a name="TrustDomain" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.trustDomain"></a>

```go
TrustDomain *string
```

- *Type:* *string

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#trust_domain SpiffeSecretBackendConfig#trust_domain}

---

##### `BundleRefreshHint`<sup>Optional</sup> <a name="BundleRefreshHint" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.bundleRefreshHint"></a>

```go
BundleRefreshHint *string
```

- *Type:* *string

Refresh hint to use in trust bundles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#bundle_refresh_hint SpiffeSecretBackendConfig#bundle_refresh_hint}

---

##### `JwtIssuerUrl`<sup>Optional</sup> <a name="JwtIssuerUrl" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtIssuerUrl"></a>

```go
JwtIssuerUrl *string
```

- *Type:* *string

Base URL to use for JWT iss claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_issuer_url SpiffeSecretBackendConfig#jwt_issuer_url}

---

##### `JwtOidcCompatibilityMode`<sup>Optional</sup> <a name="JwtOidcCompatibilityMode" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtOidcCompatibilityMode"></a>

```go
JwtOidcCompatibilityMode interface{}
```

- *Type:* interface{}

If true, SPIFFE IDs in JWT SVIDs must not exceed 255 bytes, the limit for the sub claim in OIDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_oidc_compatibility_mode SpiffeSecretBackendConfig#jwt_oidc_compatibility_mode}

---

##### `JwtSigningAlgorithm`<sup>Optional</sup> <a name="JwtSigningAlgorithm" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.jwtSigningAlgorithm"></a>

```go
JwtSigningAlgorithm *string
```

- *Type:* *string

Signing algorithm to use for JWTs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#jwt_signing_algorithm SpiffeSecretBackendConfig#jwt_signing_algorithm}

---

##### `KeyLifetime`<sup>Optional</sup> <a name="KeyLifetime" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.keyLifetime"></a>

```go
KeyLifetime *string
```

- *Type:* *string

How long a signing key will live for once it starts being used to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#key_lifetime SpiffeSecretBackendConfig#key_lifetime}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.spiffeSecretBackendConfig.SpiffeSecretBackendConfigConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/spiffe_secret_backend_config#namespace SpiffeSecretBackendConfig#namespace}

---



