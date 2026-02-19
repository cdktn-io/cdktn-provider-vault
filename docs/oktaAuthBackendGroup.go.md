# `oktaAuthBackendGroup` Submodule <a name="`oktaAuthBackendGroup` Submodule" id="@cdktn/provider-vault.oktaAuthBackendGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaAuthBackendGroupA <a name="OktaAuthBackendGroupA" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/okta_auth_backend_group vault_okta_auth_backend_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/oktaauthbackendgroup"

oktaauthbackendgroup.NewOktaAuthBackendGroupA(scope Construct, id *string, config OktaAuthBackendGroupAConfig) OktaAuthBackendGroupA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig">OktaAuthBackendGroupAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig">OktaAuthBackendGroupAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetPolicies">ResetPolicies</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.resetPolicies"></a>

```go
func ResetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OktaAuthBackendGroupA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/oktaauthbackendgroup"

oktaauthbackendgroup.OktaAuthBackendGroupA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/oktaauthbackendgroup"

oktaauthbackendgroup.OktaAuthBackendGroupA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/oktaauthbackendgroup"

oktaauthbackendgroup.OktaAuthBackendGroupA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/oktaauthbackendgroup"

oktaauthbackendgroup.OktaAuthBackendGroupA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OktaAuthBackendGroupA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OktaAuthBackendGroupA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OktaAuthBackendGroupA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/okta_auth_backend_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OktaAuthBackendGroupA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.policiesInput">PoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.policiesInput"></a>

```go
func PoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OktaAuthBackendGroupAConfig <a name="OktaAuthBackendGroupAConfig" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v16/oktaauthbackendgroup"

&oktaauthbackendgroup.OktaAuthBackendGroupAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GroupName: *string,
	Path: *string,
	Id: *string,
	Namespace: *string,
	Policies: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.groupName">GroupName</a></code> | <code>*string</code> | Name of the Okta group. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.path">Path</a></code> | <code>*string</code> | Path to the Okta auth backend. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/okta_auth_backend_group#id OktaAuthBackendGroupA#id}. |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.policies">Policies</a></code> | <code>*[]*string</code> | Policies to associate with this group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

Name of the Okta group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/okta_auth_backend_group#group_name OktaAuthBackendGroupA#group_name}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path to the Okta auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/okta_auth_backend_group#path OktaAuthBackendGroupA#path}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/okta_auth_backend_group#id OktaAuthBackendGroupA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/okta_auth_backend_group#namespace OktaAuthBackendGroupA#namespace}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-vault.oktaAuthBackendGroup.OktaAuthBackendGroupAConfig.property.policies"></a>

```go
Policies *[]*string
```

- *Type:* *[]*string

Policies to associate with this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/okta_auth_backend_group#policies OktaAuthBackendGroupA#policies}

---



