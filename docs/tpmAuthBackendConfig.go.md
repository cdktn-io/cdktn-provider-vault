# `tpmAuthBackendConfig` Submodule <a name="`tpmAuthBackendConfig` Submodule" id="@cdktn/provider-vault.tpmAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TpmAuthBackendConfig <a name="TpmAuthBackendConfig" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config vault_tpm_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/tpmauthbackendconfig"

tpmauthbackendconfig.NewTpmAuthBackendConfig(scope Construct, id *string, config TpmAuthBackendConfigConfig) TpmAuthBackendConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig">TpmAuthBackendConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig">TpmAuthBackendConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaLifetime">ResetCaLifetime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaSoftExpiry">ResetCaSoftExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetDefaultCertTtl">ResetDefaultCertTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCaLifetime` <a name="ResetCaLifetime" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaLifetime"></a>

```go
func ResetCaLifetime()
```

##### `ResetCaSoftExpiry` <a name="ResetCaSoftExpiry" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetCaSoftExpiry"></a>

```go
func ResetCaSoftExpiry()
```

##### `ResetDefaultCertTtl` <a name="ResetDefaultCertTtl" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetDefaultCertTtl"></a>

```go
func ResetDefaultCertTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.resetNamespace"></a>

```go
func ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TpmAuthBackendConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/tpmauthbackendconfig"

tpmauthbackendconfig.TpmAuthBackendConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/tpmauthbackendconfig"

tpmauthbackendconfig.TpmAuthBackendConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/tpmauthbackendconfig"

tpmauthbackendconfig.TpmAuthBackendConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/tpmauthbackendconfig"

tpmauthbackendconfig.TpmAuthBackendConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a TpmAuthBackendConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TpmAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TpmAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the TpmAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetimeInput">CaLifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiryInput">CaSoftExpiryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtlInput">DefaultCertTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mountInput">MountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetime">CaLifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiry">CaSoftExpiry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtl">DefaultCertTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mount">Mount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaLifetimeInput`<sup>Optional</sup> <a name="CaLifetimeInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetimeInput"></a>

```go
func CaLifetimeInput() *f64
```

- *Type:* *f64

---

##### `CaSoftExpiryInput`<sup>Optional</sup> <a name="CaSoftExpiryInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiryInput"></a>

```go
func CaSoftExpiryInput() *f64
```

- *Type:* *f64

---

##### `DefaultCertTtlInput`<sup>Optional</sup> <a name="DefaultCertTtlInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtlInput"></a>

```go
func DefaultCertTtlInput() *f64
```

- *Type:* *f64

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mountInput"></a>

```go
func MountInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `CaLifetime`<sup>Required</sup> <a name="CaLifetime" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caLifetime"></a>

```go
func CaLifetime() *f64
```

- *Type:* *f64

---

##### `CaSoftExpiry`<sup>Required</sup> <a name="CaSoftExpiry" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.caSoftExpiry"></a>

```go
func CaSoftExpiry() *f64
```

- *Type:* *f64

---

##### `DefaultCertTtl`<sup>Required</sup> <a name="DefaultCertTtl" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.defaultCertTtl"></a>

```go
func DefaultCertTtl() *f64
```

- *Type:* *f64

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.mount"></a>

```go
func Mount() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TpmAuthBackendConfigConfig <a name="TpmAuthBackendConfigConfig" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/tpmauthbackendconfig"

&tpmauthbackendconfig.TpmAuthBackendConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Mount: *string,
	CaLifetime: *f64,
	CaSoftExpiry: *f64,
	DefaultCertTtl: *f64,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.mount">Mount</a></code> | <code>*string</code> | Path of the enabled TPM auth backend mount to configure. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caLifetime">CaLifetime</a></code> | <code>*f64</code> | How long each CA is valid once it becomes active, in seconds. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caSoftExpiry">CaSoftExpiry</a></code> | <code>*f64</code> | How long before hard expiry the active CA stops signing new certificates, in seconds. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.defaultCertTtl">DefaultCertTtl</a></code> | <code>*f64</code> | Default lifetime for issued client certificates when the role does not specify `cert_ttl`, in seconds. |
| <code><a href="#@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.mount"></a>

```go
Mount *string
```

- *Type:* *string

Path of the enabled TPM auth backend mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#mount TpmAuthBackendConfig#mount}

---

##### `CaLifetime`<sup>Optional</sup> <a name="CaLifetime" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caLifetime"></a>

```go
CaLifetime *f64
```

- *Type:* *f64

How long each CA is valid once it becomes active, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#ca_lifetime TpmAuthBackendConfig#ca_lifetime}

---

##### `CaSoftExpiry`<sup>Optional</sup> <a name="CaSoftExpiry" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.caSoftExpiry"></a>

```go
CaSoftExpiry *f64
```

- *Type:* *f64

How long before hard expiry the active CA stops signing new certificates, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#ca_soft_expiry TpmAuthBackendConfig#ca_soft_expiry}

---

##### `DefaultCertTtl`<sup>Optional</sup> <a name="DefaultCertTtl" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.defaultCertTtl"></a>

```go
DefaultCertTtl *f64
```

- *Type:* *f64

Default lifetime for issued client certificates when the role does not specify `cert_ttl`, in seconds.

When unset or `0`, the effective TTL falls back to CA soft expiry. Vault always caps the actual certificate lifetime by the remaining validity of the signing CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#default_cert_ttl TpmAuthBackendConfig#default_cert_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.tpmAuthBackendConfig.TpmAuthBackendConfigConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/tpm_auth_backend_config#namespace TpmAuthBackendConfig#namespace}

---



