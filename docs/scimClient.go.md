# `scimClient` Submodule <a name="`scimClient` Submodule" id="@cdktn/provider-vault.scimClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScimClient <a name="ScimClient" id="@cdktn/provider-vault.scimClient.ScimClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client vault_scim_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/scimclient"

scimclient.NewScimClient(scope Construct, id *string, config ScimClientConfig) ScimClient
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig">ScimClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.scimClient.ScimClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientConfig">ScimClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAliasMountAccessor">ResetAliasMountAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowedExtraAliasMountAccessors">ResetAllowedExtraAliasMountAccessors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowGroupAdoption">ResetAllowGroupAdoption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetAllowUserAdoption">ResetAllowUserAdoption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetDefaultSchemaVersion">ResetDefaultSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetMaxActiveTokens">ResetMaxActiveTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetMaxTokenTtl">ResetMaxTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.scimClient.ScimClient.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.scimClient.ScimClient.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.scimClient.ScimClient.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.scimClient.ScimClient.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.scimClient.ScimClient.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.scimClient.ScimClient.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.scimClient.ScimClient.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.scimClient.ScimClient.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-vault.scimClient.ScimClient.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-vault.scimClient.ScimClient.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.scimClient.ScimClient.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-vault.scimClient.ScimClient.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.scimClient.ScimClient.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-vault.scimClient.ScimClient.putTimeouts"></a>

```go
func PutTimeouts(value ScimClientTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.scimClient.ScimClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

---

##### `ResetAliasMountAccessor` <a name="ResetAliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClient.resetAliasMountAccessor"></a>

```go
func ResetAliasMountAccessor()
```

##### `ResetAllowedExtraAliasMountAccessors` <a name="ResetAllowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowedExtraAliasMountAccessors"></a>

```go
func ResetAllowedExtraAliasMountAccessors()
```

##### `ResetAllowGroupAdoption` <a name="ResetAllowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowGroupAdoption"></a>

```go
func ResetAllowGroupAdoption()
```

##### `ResetAllowUserAdoption` <a name="ResetAllowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.resetAllowUserAdoption"></a>

```go
func ResetAllowUserAdoption()
```

##### `ResetDefaultSchemaVersion` <a name="ResetDefaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClient.resetDefaultSchemaVersion"></a>

```go
func ResetDefaultSchemaVersion()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClient.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.scimClient.ScimClient.resetId"></a>

```go
func ResetId()
```

##### `ResetMaxActiveTokens` <a name="ResetMaxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClient.resetMaxActiveTokens"></a>

```go
func ResetMaxActiveTokens()
```

##### `ResetMaxTokenTtl` <a name="ResetMaxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClient.resetMaxTokenTtl"></a>

```go
func ResetMaxTokenTtl()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.scimClient.ScimClient.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-vault.scimClient.ScimClient.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.scimClient.ScimClient.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/scimclient"

scimclient.ScimClient_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/scimclient"

scimclient.ScimClient_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/scimclient"

scimclient.ScimClient_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.scimClient.ScimClient.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/scimclient"

scimclient.ScimClient_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ScimClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ScimClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.scimClient.ScimClient.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ScimClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deleting">Deleting</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference">ScimClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipalInput">AccessGrantPrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessorInput">AliasMountAccessorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessorsInput">AllowedExtraAliasMountAccessorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoptionInput">AllowGroupAdoptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoptionInput">AllowUserAdoptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientNameInput">ClientNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersionInput">DefaultSchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokensInput">MaxActiveTokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtlInput">MaxTokenTtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipal">AccessGrantPrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessor">AliasMountAccessor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessors">AllowedExtraAliasMountAccessors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoption">AllowGroupAdoption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoption">AllowUserAdoption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.clientName">ClientName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersion">DefaultSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokens">MaxActiveTokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.scimClient.ScimClient.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.scimClient.ScimClient.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.scimClient.ScimClient.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.scimClient.ScimClient.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.scimClient.ScimClient.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.scimClient.ScimClient.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.scimClient.ScimClient.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.scimClient.ScimClient.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.scimClient.ScimClient.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.scimClient.ScimClient.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.scimClient.ScimClient.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.scimClient.ScimClient.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Deleting`<sup>Required</sup> <a name="Deleting" id="@cdktn/provider-vault.scimClient.ScimClient.property.deleting"></a>

```go
func Deleting() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-vault.scimClient.ScimClient.property.timeouts"></a>

```go
func Timeouts() ScimClientTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference">ScimClientTimeoutsOutputReference</a>

---

##### `AccessGrantPrincipalInput`<sup>Optional</sup> <a name="AccessGrantPrincipalInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipalInput"></a>

```go
func AccessGrantPrincipalInput() *string
```

- *Type:* *string

---

##### `AliasMountAccessorInput`<sup>Optional</sup> <a name="AliasMountAccessorInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessorInput"></a>

```go
func AliasMountAccessorInput() *string
```

- *Type:* *string

---

##### `AllowedExtraAliasMountAccessorsInput`<sup>Optional</sup> <a name="AllowedExtraAliasMountAccessorsInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessorsInput"></a>

```go
func AllowedExtraAliasMountAccessorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowGroupAdoptionInput`<sup>Optional</sup> <a name="AllowGroupAdoptionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoptionInput"></a>

```go
func AllowGroupAdoptionInput() interface{}
```

- *Type:* interface{}

---

##### `AllowUserAdoptionInput`<sup>Optional</sup> <a name="AllowUserAdoptionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoptionInput"></a>

```go
func AllowUserAdoptionInput() interface{}
```

- *Type:* interface{}

---

##### `ClientNameInput`<sup>Optional</sup> <a name="ClientNameInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientNameInput"></a>

```go
func ClientNameInput() *string
```

- *Type:* *string

---

##### `DefaultSchemaVersionInput`<sup>Optional</sup> <a name="DefaultSchemaVersionInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersionInput"></a>

```go
func DefaultSchemaVersionInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaxActiveTokensInput`<sup>Optional</sup> <a name="MaxActiveTokensInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokensInput"></a>

```go
func MaxActiveTokensInput() *f64
```

- *Type:* *f64

---

##### `MaxTokenTtlInput`<sup>Optional</sup> <a name="MaxTokenTtlInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtlInput"></a>

```go
func MaxTokenTtlInput() *f64
```

- *Type:* *f64

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-vault.scimClient.ScimClient.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessGrantPrincipal`<sup>Required</sup> <a name="AccessGrantPrincipal" id="@cdktn/provider-vault.scimClient.ScimClient.property.accessGrantPrincipal"></a>

```go
func AccessGrantPrincipal() *string
```

- *Type:* *string

---

##### `AliasMountAccessor`<sup>Required</sup> <a name="AliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClient.property.aliasMountAccessor"></a>

```go
func AliasMountAccessor() *string
```

- *Type:* *string

---

##### `AllowedExtraAliasMountAccessors`<sup>Required</sup> <a name="AllowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowedExtraAliasMountAccessors"></a>

```go
func AllowedExtraAliasMountAccessors() *[]*string
```

- *Type:* *[]*string

---

##### `AllowGroupAdoption`<sup>Required</sup> <a name="AllowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowGroupAdoption"></a>

```go
func AllowGroupAdoption() interface{}
```

- *Type:* interface{}

---

##### `AllowUserAdoption`<sup>Required</sup> <a name="AllowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClient.property.allowUserAdoption"></a>

```go
func AllowUserAdoption() interface{}
```

- *Type:* interface{}

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-vault.scimClient.ScimClient.property.clientName"></a>

```go
func ClientName() *string
```

- *Type:* *string

---

##### `DefaultSchemaVersion`<sup>Required</sup> <a name="DefaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClient.property.defaultSchemaVersion"></a>

```go
func DefaultSchemaVersion() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClient.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.scimClient.ScimClient.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaxActiveTokens`<sup>Required</sup> <a name="MaxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxActiveTokens"></a>

```go
func MaxActiveTokens() *f64
```

- *Type:* *f64

---

##### `MaxTokenTtl`<sup>Required</sup> <a name="MaxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClient.property.maxTokenTtl"></a>

```go
func MaxTokenTtl() *f64
```

- *Type:* *f64

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.scimClient.ScimClient.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClient.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.scimClient.ScimClient.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ScimClientConfig <a name="ScimClientConfig" id="@cdktn/provider-vault.scimClient.ScimClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.scimClient.ScimClientConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/scimclient"

&scimclient.ScimClientConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessGrantPrincipal: *string,
	ClientName: *string,
	AliasMountAccessor: *string,
	AllowedExtraAliasMountAccessors: *[]*string,
	AllowGroupAdoption: interface{},
	AllowUserAdoption: interface{},
	DefaultSchemaVersion: *string,
	DeletionPolicy: *string,
	Id: *string,
	MaxActiveTokens: *f64,
	MaxTokenTtl: *f64,
	Namespace: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-vault-go/vault/v19.scimClient.ScimClientTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.accessGrantPrincipal">AccessGrantPrincipal</a></code> | <code>*string</code> | Entity ID authorized to call SCIM protocol endpoints on behalf of this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.clientName">ClientName</a></code> | <code>*string</code> | The name of the SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.aliasMountAccessor">AliasMountAccessor</a></code> | <code>*string</code> | Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowedExtraAliasMountAccessors">AllowedExtraAliasMountAccessors</a></code> | <code>*[]*string</code> | Additional mount accessors whose aliases may be managed by this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowGroupAdoption">AllowGroupAdoption</a></code> | <code>interface{}</code> | Whether to allow adoption of existing Vault groups by SCIM-provisioned groups. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowUserAdoption">AllowUserAdoption</a></code> | <code>interface{}</code> | Whether to allow adoption of existing Vault entities by SCIM users. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.defaultSchemaVersion">DefaultSchemaVersion</a></code> | <code>*string</code> | The Vault SCIM extension schema version used for this client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Controls how linked entities/groups/aliases are handled when this resource is destroyed. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxActiveTokens">MaxActiveTokens</a></code> | <code>*f64</code> | Maximum number of active tokens for this SCIM client. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxTokenTtl">MaxTokenTtl</a></code> | <code>*f64</code> | Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessGrantPrincipal`<sup>Required</sup> <a name="AccessGrantPrincipal" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.accessGrantPrincipal"></a>

```go
AccessGrantPrincipal *string
```

- *Type:* *string

Entity ID authorized to call SCIM protocol endpoints on behalf of this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#access_grant_principal ScimClient#access_grant_principal}

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.clientName"></a>

```go
ClientName *string
```

- *Type:* *string

The name of the SCIM client.

Must be lowercase, because Vault lowercases client names when it stores them. May contain only letters, digits, '*', '-' and '.', and must start and end with a letter, digit or '*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#client_name ScimClient#client_name}

---

##### `AliasMountAccessor`<sup>Optional</sup> <a name="AliasMountAccessor" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.aliasMountAccessor"></a>

```go
AliasMountAccessor *string
```

- *Type:* *string

Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#alias_mount_accessor ScimClient#alias_mount_accessor}

---

##### `AllowedExtraAliasMountAccessors`<sup>Optional</sup> <a name="AllowedExtraAliasMountAccessors" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowedExtraAliasMountAccessors"></a>

```go
AllowedExtraAliasMountAccessors *[]*string
```

- *Type:* *[]*string

Additional mount accessors whose aliases may be managed by this SCIM client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allowed_extra_alias_mount_accessors ScimClient#allowed_extra_alias_mount_accessors}

---

##### `AllowGroupAdoption`<sup>Optional</sup> <a name="AllowGroupAdoption" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowGroupAdoption"></a>

```go
AllowGroupAdoption interface{}
```

- *Type:* interface{}

Whether to allow adoption of existing Vault groups by SCIM-provisioned groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_group_adoption ScimClient#allow_group_adoption}

---

##### `AllowUserAdoption`<sup>Optional</sup> <a name="AllowUserAdoption" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.allowUserAdoption"></a>

```go
AllowUserAdoption interface{}
```

- *Type:* interface{}

Whether to allow adoption of existing Vault entities by SCIM users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_user_adoption ScimClient#allow_user_adoption}

---

##### `DefaultSchemaVersion`<sup>Optional</sup> <a name="DefaultSchemaVersion" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.defaultSchemaVersion"></a>

```go
DefaultSchemaVersion *string
```

- *Type:* *string

The Vault SCIM extension schema version used for this client.

Must be "2.0" or "2.2". Leave unset to use Vault's default for new clients ("2.2").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#default_schema_version ScimClient#default_schema_version}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Controls how linked entities/groups/aliases are handled when this resource is destroyed.

`orphan_child_resources` detaches managed resources without deleting them; `delete_child_resources` deletes all managed resources along with the client. Leave unset for a plain delete (fails if the client still owns linked resources). Only consulted at destroy time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#deletion_policy ScimClient#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxActiveTokens`<sup>Optional</sup> <a name="MaxActiveTokens" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxActiveTokens"></a>

```go
MaxActiveTokens *f64
```

- *Type:* *f64

Maximum number of active tokens for this SCIM client.

Must be a positive non-zero value. Leave unset to use Vault's default (2).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_active_tokens ScimClient#max_active_tokens}

---

##### `MaxTokenTtl`<sup>Optional</sup> <a name="MaxTokenTtl" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.maxTokenTtl"></a>

```go
MaxTokenTtl *f64
```

- *Type:* *f64

Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_token_ttl ScimClient#max_token_ttl}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#namespace ScimClient#namespace}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-vault.scimClient.ScimClientConfig.property.timeouts"></a>

```go
Timeouts ScimClientTimeouts
```

- *Type:* <a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts">ScimClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#timeouts ScimClient#timeouts}

---

### ScimClientTimeouts <a name="ScimClientTimeouts" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/scimclient"

&scimclient.ScimClientTimeouts {
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ScimClientTimeoutsOutputReference <a name="ScimClientTimeoutsOutputReference" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-vault-go/vault/v19/scimclient"

scimclient.NewScimClientTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ScimClientTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-vault.scimClient.ScimClientTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



