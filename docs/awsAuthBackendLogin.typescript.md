# `awsAuthBackendLogin` Submodule <a name="`awsAuthBackendLogin` Submodule" id="@cdktn/provider-vault.awsAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendLogin <a name="AwsAuthBackendLogin" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login vault_aws_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer"></a>

```typescript
import { awsAuthBackendLogin } from '@cdktn/provider-vault'

new awsAuthBackendLogin.AwsAuthBackendLogin(scope: Construct, id: string, config?: AwsAuthBackendLoginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig">AwsAuthBackendLoginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig">AwsAuthBackendLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamHttpRequestMethod">resetIamHttpRequestMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestBody">resetIamRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestHeaders">resetIamRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestUrl">resetIamRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNonce">resetNonce</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetPkcs7">resetPkcs7</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetSignature">resetSignature</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetIamHttpRequestMethod` <a name="resetIamHttpRequestMethod" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamHttpRequestMethod"></a>

```typescript
public resetIamHttpRequestMethod(): void
```

##### `resetIamRequestBody` <a name="resetIamRequestBody" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestBody"></a>

```typescript
public resetIamRequestBody(): void
```

##### `resetIamRequestHeaders` <a name="resetIamRequestHeaders" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestHeaders"></a>

```typescript
public resetIamRequestHeaders(): void
```

##### `resetIamRequestUrl` <a name="resetIamRequestUrl" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestUrl"></a>

```typescript
public resetIamRequestUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNonce` <a name="resetNonce" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNonce"></a>

```typescript
public resetNonce(): void
```

##### `resetPkcs7` <a name="resetPkcs7" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetPkcs7"></a>

```typescript
public resetPkcs7(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetSignature` <a name="resetSignature" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetSignature"></a>

```typescript
public resetSignature(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AwsAuthBackendLogin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct"></a>

```typescript
import { awsAuthBackendLogin } from '@cdktn/provider-vault'

awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement"></a>

```typescript
import { awsAuthBackendLogin } from '@cdktn/provider-vault'

awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource"></a>

```typescript
import { awsAuthBackendLogin } from '@cdktn/provider-vault'

awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport"></a>

```typescript
import { awsAuthBackendLogin } from '@cdktn/provider-vault'

awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AwsAuthBackendLogin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsAuthBackendLogin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsAuthBackendLogin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendLogin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseStartTime">leaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.renewable">renewable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethodInput">iamHttpRequestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBodyInput">iamRequestBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeadersInput">iamRequestHeadersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrlInput">iamRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identityInput">identityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonceInput">nonceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7Input">pkcs7Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signatureInput">signatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethod">iamHttpRequestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBody">iamRequestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeaders">iamRequestHeaders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrl">iamRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonce">nonce</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7">pkcs7</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signature">signature</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseStartTime"></a>

```typescript
public readonly leaseStartTime: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.renewable"></a>

```typescript
public readonly renewable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `iamHttpRequestMethodInput`<sup>Optional</sup> <a name="iamHttpRequestMethodInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethodInput"></a>

```typescript
public readonly iamHttpRequestMethodInput: string;
```

- *Type:* string

---

##### `iamRequestBodyInput`<sup>Optional</sup> <a name="iamRequestBodyInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBodyInput"></a>

```typescript
public readonly iamRequestBodyInput: string;
```

- *Type:* string

---

##### `iamRequestHeadersInput`<sup>Optional</sup> <a name="iamRequestHeadersInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeadersInput"></a>

```typescript
public readonly iamRequestHeadersInput: string;
```

- *Type:* string

---

##### `iamRequestUrlInput`<sup>Optional</sup> <a name="iamRequestUrlInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrlInput"></a>

```typescript
public readonly iamRequestUrlInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identityInput"></a>

```typescript
public readonly identityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `nonceInput`<sup>Optional</sup> <a name="nonceInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonceInput"></a>

```typescript
public readonly nonceInput: string;
```

- *Type:* string

---

##### `pkcs7Input`<sup>Optional</sup> <a name="pkcs7Input" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7Input"></a>

```typescript
public readonly pkcs7Input: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signatureInput"></a>

```typescript
public readonly signatureInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `iamHttpRequestMethod`<sup>Required</sup> <a name="iamHttpRequestMethod" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethod"></a>

```typescript
public readonly iamHttpRequestMethod: string;
```

- *Type:* string

---

##### `iamRequestBody`<sup>Required</sup> <a name="iamRequestBody" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBody"></a>

```typescript
public readonly iamRequestBody: string;
```

- *Type:* string

---

##### `iamRequestHeaders`<sup>Required</sup> <a name="iamRequestHeaders" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeaders"></a>

```typescript
public readonly iamRequestHeaders: string;
```

- *Type:* string

---

##### `iamRequestUrl`<sup>Required</sup> <a name="iamRequestUrl" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrl"></a>

```typescript
public readonly iamRequestUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `nonce`<sup>Required</sup> <a name="nonce" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonce"></a>

```typescript
public readonly nonce: string;
```

- *Type:* string

---

##### `pkcs7`<sup>Required</sup> <a name="pkcs7" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7"></a>

```typescript
public readonly pkcs7: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendLoginConfig <a name="AwsAuthBackendLoginConfig" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.Initializer"></a>

```typescript
import { awsAuthBackendLogin } from '@cdktn/provider-vault'

const awsAuthBackendLoginConfig: awsAuthBackendLogin.AwsAuthBackendLoginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.backend">backend</a></code> | <code>string</code> | AWS Auth Backend to read the token from. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamHttpRequestMethod">iamHttpRequestMethod</a></code> | <code>string</code> | The HTTP method used in the signed request. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestBody">iamRequestBody</a></code> | <code>string</code> | The Base64-encoded body of the signed request. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestHeaders">iamRequestHeaders</a></code> | <code>string</code> | The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestUrl">iamRequestUrl</a></code> | <code>string</code> | The Base64-encoded HTTP URL used in the signed request. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.identity">identity</a></code> | <code>string</code> | Base64-encoded EC2 instance identity document to authenticate with. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.nonce">nonce</a></code> | <code>string</code> | The nonce to be used for subsequent login requests. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.pkcs7">pkcs7</a></code> | <code>string</code> | PKCS7 signature of the identity document to authenticate with, with all newline characters removed. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.role">role</a></code> | <code>string</code> | AWS Auth Role to read the token from. |
| <code><a href="#@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.signature">signature</a></code> | <code>string</code> | Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

AWS Auth Backend to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#backend AwsAuthBackendLogin#backend}

---

##### `iamHttpRequestMethod`<sup>Optional</sup> <a name="iamHttpRequestMethod" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamHttpRequestMethod"></a>

```typescript
public readonly iamHttpRequestMethod: string;
```

- *Type:* string

The HTTP method used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#iam_http_request_method AwsAuthBackendLogin#iam_http_request_method}

---

##### `iamRequestBody`<sup>Optional</sup> <a name="iamRequestBody" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestBody"></a>

```typescript
public readonly iamRequestBody: string;
```

- *Type:* string

The Base64-encoded body of the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#iam_request_body AwsAuthBackendLogin#iam_request_body}

---

##### `iamRequestHeaders`<sup>Optional</sup> <a name="iamRequestHeaders" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestHeaders"></a>

```typescript
public readonly iamRequestHeaders: string;
```

- *Type:* string

The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#iam_request_headers AwsAuthBackendLogin#iam_request_headers}

---

##### `iamRequestUrl`<sup>Optional</sup> <a name="iamRequestUrl" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestUrl"></a>

```typescript
public readonly iamRequestUrl: string;
```

- *Type:* string

The Base64-encoded HTTP URL used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#iam_request_url AwsAuthBackendLogin#iam_request_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

Base64-encoded EC2 instance identity document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#identity AwsAuthBackendLogin#identity}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#namespace AwsAuthBackendLogin#namespace}

---

##### `nonce`<sup>Optional</sup> <a name="nonce" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.nonce"></a>

```typescript
public readonly nonce: string;
```

- *Type:* string

The nonce to be used for subsequent login requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#nonce AwsAuthBackendLogin#nonce}

---

##### `pkcs7`<sup>Optional</sup> <a name="pkcs7" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.pkcs7"></a>

```typescript
public readonly pkcs7: string;
```

- *Type:* string

PKCS7 signature of the identity document to authenticate with, with all newline characters removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#pkcs7 AwsAuthBackendLogin#pkcs7}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

AWS Auth Role to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#role AwsAuthBackendLogin#role}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktn/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/aws_auth_backend_login#signature AwsAuthBackendLogin#signature}

---



